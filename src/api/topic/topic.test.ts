import { TopicClient } from './topic';
import { event } from '../../interfaces';
import { NitricTopic } from '../../interfaces/event';

// Extract the DocumentsClient
const { TopicClient: GrpcTopicClient } = event;

describe('TopicClient Tests', () => {
  describe('Given nitric.api.event.TopicClient.List throws an error', () => {
    const MOCK_ERROR = {
      code: 2,
      message: 'UNIMPLEMENTED',
    };
    let listMock;

    beforeAll(() => {
      listMock = jest
        .spyOn(GrpcTopicClient.prototype, 'list')
        .mockImplementation((_, callback: any) => {
          callback(MOCK_ERROR, null);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then TopicClient.publish should reject', () => {
      const client = new TopicClient();
      expect(client.list()).rejects.toBe(MOCK_ERROR);
    });

    test('The Grpc client for TopicClient.publish should have been called exactly once', () => {
      expect(listMock).toBeCalledTimes(1);
    });
  });

  describe('Given nitric.api.event.TopicClient.List succeeds', () => {
    const MOCK_TOPIC = new NitricTopic();
    MOCK_TOPIC.setName('test-topic');
    const MOCK_TOPICS: NitricTopic[] = [MOCK_TOPIC];
    const MOCK_TOPICS_REPLY = new event.TopicListResponse();
    MOCK_TOPICS_REPLY.setTopicsList(MOCK_TOPICS);

    let listMock;

    beforeAll(() => {
      listMock = jest
        .spyOn(GrpcTopicClient.prototype, 'list')
        .mockImplementation((_, callback: any) => {
          callback(null, MOCK_TOPICS_REPLY);

          return null as any;
        });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test('Then TopicClient.publish should resolve with available topics', () => {
      const client = new TopicClient();
      expect(client.list()).resolves.toEqual(['test-topic']);
    });

    test('The Grpc client for TopicClient.publish should have been called exactly once', () => {
      expect(listMock).toBeCalledTimes(1);
    });
  });
});
