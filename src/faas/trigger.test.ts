// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { 
  HttpTriggerContext as GrpcHttpTriggerRequest, 
  TopicTriggerContext as GrpcTopicTriggerContext, 
  TriggerRequest 
} from '../interfaces/faas';
import { NitricTrigger } from './trigger';
import { HttpTriggerContext, TopicTriggerContext } from './trigger-context';
import { Response } from './response';

describe('NitricTrigger.fromGrpcTriggerRequest', () => {
  describe('From a HttpTriggerRequest', () => {
    let trigger: NitricTrigger<string>;

    beforeAll(() => {
      const ctx = new GrpcHttpTriggerRequest();
      ctx.setMethod("GET");
      ctx.setPath("/test/");
      ctx.getHeadersMap().set("test", "test");
      ctx.getQueryParamsMap().set("test", "test");
      const request = new TriggerRequest();
      request.setData("Hello World");
      request.setHttp(ctx);

      trigger = NitricTrigger.fromGrpcTriggerRequest(request);
    });

    it("should have the provided data", () => {
      expect(trigger.data).toBe("Hello World");
    });

    it("should have HTTP context", () => {
      expect(trigger.context.isHttp()).toBe(true);
    })

    it("should have the triggers HTTP Method", () => {
      expect(trigger.context.asHttp().method).toBe("GET");
    });

    it("should have to provided headers", () => {
      expect(trigger.context.asHttp().headers["test"]).toBe("test");
    });

    it("should have to provided query params", () => {
      expect(trigger.context.asHttp().query["test"]).toBe("test");
    });
  });

  describe('From a TopicTriggerRequest', () => {
    let trigger: NitricTrigger<string>;

    beforeAll(() => {
      const ctx = new GrpcTopicTriggerContext();
      ctx.setTopic("test");
    
      const request = new TriggerRequest();
      request.setData("Hello World");
      request.setTopic(ctx);

      trigger = NitricTrigger.fromGrpcTriggerRequest(request);
    });

    it("should have topic trigger context", () => {
      expect(trigger.context.isTopic()).toBe(true);
    });

    it("should have the topic name that raised the trigger", () => {
      expect(trigger.context.asTopic().topic).toBe("test");
    });
  });
});

describe("NitricTrigger.defaultResponse", () => {

  describe("Given a trigger with HttpContext", () => {
    let response: Response<any>;

    beforeAll(() => {
      const ctx = new HttpTriggerContext(
        "POST",
        "/test/",
        { "test": "test" },
        { "test": "test" }
      );

      const trigger = new NitricTrigger<string>("testing", ctx);
      response = trigger.defaultResponse();
    });

    it("The default response should have HTTP Context", () => {
      expect(response.context.isHttp()).toBe(true);
    });
  });

  describe("Given a trigger with TopicContext", () => {
    let response: Response<any>;

    beforeAll(() => {
      const ctx = new TopicTriggerContext(
        "test",
      );

      const trigger = new NitricTrigger<string>("testing", ctx);
      response = trigger.defaultResponse();
    });

    it("The default response should have Topic Context", () => {
      expect(response.context.isTopic()).toBe(true);
    });
  });

  describe("Given a trigger with no context", () => {
    let trigger: NitricTrigger<any>;

    beforeAll(() => {
      trigger = new NitricTrigger<string>("testing", null);
    });

    it("Should throw", () => {
      expect(trigger.defaultResponse).toThrow();
    });
  });
});

describe('Nitric Trigger Tests', () => {
  describe('Given an empty HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const trigger = new NitricTrigger<any>("", new HttpTriggerContext(
      "GET", "/test/", headers, {}
    ));

    test('NitricRequest.getObject, should throw', () => {
      expect(trigger.dataAsObject).toThrow('Unexpected end of JSON input');
    });

    test('NitricRequest.getString, should be empty', () => {
      expect(trigger.getString()).toBe('');
    });

    test('trigger.context.isHttp should be true', () => {
      expect(trigger.context.isHttp()).toBe(true);
    });

    test('trigger.context.isTopic should be false', () => {
      expect(trigger.context.isTopic()).toBe(false);
    });
  });

  describe('Given a JSON HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const testObject = {
      test: 'test',
    };

    const encoder = new TextEncoder();

    const trigger = new NitricTrigger<typeof testObject>(encoder.encode(JSON.stringify(testObject)), new HttpTriggerContext(
      "POST", "/test/", headers, {},
    ));

    test('NitricRequest.getObject should return the provided object', () => {
      expect(trigger.dataAsObject()).toEqual(testObject);
    });
  });

  describe('Given a plain text HTTP request', () => {
    const headers = {
      'x-nitric-request-id': 'testID',
      'x-nitric-payload-type': 'testPayload',
      'x-nitric-source': 'testSource',
      'x-nitric-source-type': 'REQUEST',
    };

    const testObject = 'test';

    const trigger = new NitricTrigger<typeof testObject>(testObject, new HttpTriggerContext(
      "POST", "/test/", headers, {}
    ));

    test('NitricRequest.getObject, should throw', () => {
      // Fix typings here...
      expect(trigger.dataAsObject).toThrow('Unexpected token');
    });

    test('NitricRequest.getString, should equal the provided string', () => {
      expect(trigger.getString()).toEqual(testObject);
    });
  });
});
