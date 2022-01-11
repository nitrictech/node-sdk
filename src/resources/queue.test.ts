import { ResourceServiceClient } from '@nitric/api/proto/resource/v1/resource_grpc_pb';
import { UnimplementedError } from '../api/errors';
import { queue } from '.';
import { ResourceDeclareResponse } from '@nitric/api/proto/resource/v1/resource_pb';

// const declareSpy =

describe('Registering queue resources', () => {
  describe('Given declare returns an error from the resource server', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };

    const validName = 'my-queue';
    let declareSpy;

    beforeAll(() => {
      declareSpy = jest
        .spyOn(ResourceServiceClient.prototype, 'declare')
        .mockImplementationOnce((request, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      declareSpy.mockClear();
    });

    it('Should throw the error', async () => {
      await expect(queue(validName).registerPromise).rejects.toEqual(
        new UnimplementedError('UNIMPLEMENTED')
      );
    });

    it('Should call the resource server', () => {
      expect(declareSpy).toBeCalledTimes(1);
    });
  });

  describe('Given declare succeeds on the resource server', () => {
    describe('When the service succeeds', () => {
      const validName = 'my-queue2';
      let otherSpy;

      beforeAll(() => {
        otherSpy = jest
          .spyOn(ResourceServiceClient.prototype, 'declare')
          .mockImplementationOnce((request, callback: any) => {
            const response = new ResourceDeclareResponse();
            callback(null, response);
            return null as any;
          });
      });

      afterAll(() => {
        jest.resetAllMocks();
      });

      it('Should succeed', async () => {
        await expect(queue(validName).registerPromise).resolves.not.toBeNull();
      });

      it('Should call the resource server', () => {
        expect(otherSpy).toBeCalledTimes(1);
      });
    });
  });
});
