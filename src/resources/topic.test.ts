import { ResourceServiceClient } from '@nitric/api/proto/resource/v1/resource_grpc_pb';
import { UnimplementedError } from '../api/errors';
import { topic } from '.';

describe('Registering topic resources', () => {
  describe('Given declare returns an error from the resource server', () => {
    describe('When the service returns an error', () => {
      const MOCK_ERROR = {
        code: 2,
        message: 'UNIMPLEMENTED',
      };

      const validName = 'my-topic';

      let declareMock;

      beforeAll(() => {
        declareMock = jest
          .spyOn(ResourceServiceClient.prototype, 'declare')
          .mockImplementation((request, callback: any) => {
            callback(MOCK_ERROR, null);

            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Should throw the error', async () => {
        await expect(topic(validName).registerPromise).rejects.toEqual(
          new UnimplementedError('UNIMPLEMENTED')
        );
      });
    });
  });
  // describe('Given the topic doesn\'t exist', () => {
  //   describe('When a valid topic name is provided', () => {

  //   })
  // })
});
