import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { TopicClient as sdkTopicClient } from "./topics";
import { events } from "../interfaces/v1";
import { NitricTopic, TopicClient } from "../interfaces/v1/events";

// Extract the DocumentsClient
const { TopicClient: GrpcTopicClient } = events;

describe("Eventing Client Tests", () => {

  describe("Given nitric.v1.eventing.GetTopics throws an error", () => {
    const MOCK_ERROR = {
      code: 2,
      message: "UNIMPLEMENTED"
    };
    let getTopicsMock;

    beforeAll(() => {
      getTopicsMock = jest.spyOn(GrpcTopicClient.prototype, "list").mockImplementation((_, callback: any) => {
        callback(MOCK_ERROR, null);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should reject", () => {
      const client = new sdkTopicClient();
      expect(client.getTopics()).rejects.toBe(MOCK_ERROR);
    });

    test("The Grpc client for Eventing.publish should have been called exactly once", () => {
      expect(getTopicsMock).toBeCalledTimes(1);
    });
  });

  describe("Given nitric.v1.eventing.GetTopics succeeds", () => {
    const MOCK_TOPIC = new NitricTopic()
    MOCK_TOPIC.setName("test-topic")
    const MOCK_TOPICS: NitricTopic[] = [MOCK_TOPIC];
    const MOCK_TOPICS_REPLY = new events.TopicListResponse();
    MOCK_TOPICS_REPLY.setTopicsList(MOCK_TOPICS);

    let getTopicsMock;

    beforeAll(() => {
      getTopicsMock = jest.spyOn(GrpcTopicClient.prototype, "list").mockImplementation((_, callback: any) => {
        callback(null, MOCK_TOPICS_REPLY);

        return null as any;
      });
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    test("Then EventingClient.publish should resolve with available topics", () => {
      const client = new sdkTopicClient();
      expect(client.getTopics()).resolves.toEqual(["test-topic"]);
    });

    test("The Grpc client for Eventing.publish should have been called exactly once", () => {
      expect(getTopicsMock).toBeCalledTimes(1);
    });
  });
});