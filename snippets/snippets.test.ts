import { grpc } from '@nitric/sdk';
import { getDocument, setDocument } from './documents';

const { DocumentServiceClient } = grpc.document;

describe('test snippets', () => {
  describe('test document snippets', () => {
    const MOCKED_GET_RESPONSE = {
      hasDocument: () => true,
      getDocument: () => ({
        getContent: () => ({
          toJavaScript: () => true,
        }),
      }),
    };

    beforeAll(() => {
      jest
        .spyOn(DocumentServiceClient.prototype, 'get')
        .mockImplementation((_, cb: any) => cb(null, MOCKED_GET_RESPONSE));

      jest
        .spyOn(DocumentServiceClient.prototype, 'set')
        .mockImplementation((_, cb: any) => cb(null, true));
    });

    test('ensure all document snippets run', async () => {
      await expect(getDocument()).resolves.toEqual(true);
      await expect(setDocument()).resolves.toEqual(true);
    });
  });
});
