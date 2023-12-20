// // Copyright 2021, Nitric Technologies Pty Ltd.
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //      http://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.
// import { start } from './start';
// import { FaasServiceClient } from '@nitric/api/proto/faas/v1/faas_grpc_pb';
// import {
//   ServerMessage,
//   ClientMessage,
// } from '@nitric/api/proto/faas/v1/faas_pb';

// jest.mock('./traceProvider');

// // We only need to handle half of the duplex stream
// class MockClientStream<Req, Resp> {
//   public receivedMessages: Req[] = [];

//   private listeners: {
//     [event: string]: ((req: Resp | string) => void)[];
//   } = {};

//   public write(req: Req) {
//     this.receivedMessages.push(req);
//   }

//   public on(event: string, cback: (req: Resp) => void) {
//     if (!this.listeners[event]) {
//       this.listeners[event] = [];
//     }
//     this.listeners[event].push(cback);
//   }

//   public emit(event: string, req: Resp | string) {
//     if (this.listeners[event]) {
//       this.listeners[event].forEach((l) => l(req));
//     }
//   }
// }

// afterAll(() => {
//   jest.restoreAllMocks();
// });

// describe('faas.start', () => {
//   let mockStream: MockClientStream<ClientMessage, ServerMessage>;
//   describe('when starting the stream', () => {
//     mockStream = new MockClientStream() as any;
//     let streamSpy: jest.SpyInstance;
//     const f = jest.fn();

//     beforeAll(async () => {
//       streamSpy = jest
//         .spyOn(FaasServiceClient.prototype, 'triggerStream')
//         .mockReturnValueOnce(mockStream as any);

//       const startPromise = start(f);
//       mockStream.emit('end', 'EOF');

//       await startPromise;
//     });

//     it('The first sent message should be an InitRequest', () => {
//       expect(mockStream.receivedMessages[0].hasInitRequest()).toBe(true);
//     });

//     it('Should start the server', () => {
//       expect(streamSpy).toBeCalled();
//     });

//     it('Should not call the function', () => {
//       expect(f).toBeCalledTimes(0);
//     });
//   });
// });
