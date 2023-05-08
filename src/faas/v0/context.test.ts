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
  TriggerRequest,
  HeaderValue,
  QueryValue,
  TriggerResponse,
} from '@nitric/api/proto/faas/v1/faas_pb';
import { TriggerContext, HttpContext, EventContext } from '.';

describe('NitricTrigger.fromGrpcTriggerRequest', () => {
  describe('From a HttpTriggerRequest', () => {
    let trigger: TriggerContext;

    beforeAll(() => {
      const ctx = new GrpcHttpTriggerRequest();
      ctx.setMethod('GET');
      ctx.setPath('/test/');
      const testHeader = new HeaderValue();
      testHeader.addValue('test');
      const testHeader2 = new HeaderValue();
      testHeader2.addValue('test2.1');
      testHeader2.addValue('test2.2');
      ctx.getHeadersMap().set('test', testHeader);
      ctx.getHeadersMap().set('test2', testHeader2);
      const testQuery = new QueryValue();
      testQuery.addValue('test');
      ctx.getQueryParamsMap().set('test', testQuery);
      const request = new TriggerRequest();
      request.setData('Hello World');
      request.setHttp(ctx);

      trigger = TriggerContext.fromGrpcTriggerRequest(request);
    });

    it('should be HttpContext', () => {
      expect(trigger instanceof HttpContext).toBeTruthy();
    });

    it('should have HTTP context', () => {
      expect(trigger.http).not.toBeUndefined();
    });

    it('should have the triggers HTTP Method', () => {
      expect(trigger.http.req.method).toBe('GET');
    });

    it('should have the provided data', () => {
      expect(trigger.http.req.data).toBe('Hello World');
    });

    it('should have the provided headers', () => {
      expect(trigger.http.req.headers['test']).toEqual('test');
      expect(trigger.http.req.headers['test2']).toEqual(['test2.1', 'test2.2']);
    });

    it('should have the provided query params', () => {
      expect(trigger.http.req.query['test']).toBe('test');
    });

    it('should allow json response', () => {
      const ctx = trigger.http.res.json({ message: 'success' });
      expect(ctx.res.headers).toEqual({ 'Content-Type': ['application/json'] });

      expect(
        JSON.parse(new TextDecoder('utf-8').decode(ctx.res.body as Uint8Array))
      ).toEqual({
        message: 'success',
      });
    });
  });

  // XXX: Remove once the deprecated old headers value is removed.
  describe('From a HttpTriggerRequest with old headers', () => {
    let trigger: TriggerContext;

    beforeAll(() => {
      const ctx = new GrpcHttpTriggerRequest();
      ctx.setMethod('GET');
      ctx.setPath('/test/');
      ctx.getHeadersOldMap().set('test', 'test');
      ctx.getHeadersOldMap().set('test2', 'test2');
      const request = new TriggerRequest();
      request.setData('Hello World');
      request.setHttp(ctx);

      trigger = TriggerContext.fromGrpcTriggerRequest(request);
    });

    it('should have the old headers', () => {
      expect(trigger.http.req.headers['test']).toEqual('test');
      expect(trigger.http.req.headers['test2']).toEqual('test2');
    });
  });

  describe('From a TopicTriggerRequest', () => {
    let trigger: TriggerContext;

    beforeAll(() => {
      const ctx = new GrpcTopicTriggerContext();
      ctx.setTopic('test');

      const request = new TriggerRequest();
      request.setData('Hello World');
      request.setTopic(ctx);

      trigger = TriggerContext.fromGrpcTriggerRequest(request);
    });

    it('should return an EventTriggerContext', () => {
      expect(trigger instanceof EventContext).toBeTruthy();
    });

    it('should have event trigger context', () => {
      expect(trigger.event).not.toBeUndefined();
    });

    it('should have the topic name that raised the trigger', () => {
      expect(trigger.event.req.topic).toBe('test');
    });
  });
});

describe('NitricTriggger.toGrpcTriggerResponse', () => {
  const grpcTrigger = new GrpcHttpTriggerRequest();
  grpcTrigger.setMethod('GET');
  grpcTrigger.setPath('/test/');
  const request = new TriggerRequest();
  request.setData('Hello World');
  request.setHttp(grpcTrigger);

  describe('When the response body is text', () => {
    let response: TriggerResponse;

    beforeEach(() => {
      const ctx: TriggerContext =
        TriggerContext.fromGrpcTriggerRequest(request);
      ctx.http.res.body = 'test';
      response = HttpContext.toGrpcTriggerResponse(ctx);
    });

    it('Should convert to bytes', () => {
      expect(response.getData() instanceof Uint8Array).toBe(true);
    });

    it('Should set the content-type to text', () => {
      expect(
        response.getHttp().getHeadersMap().get('content-type').getValueList()
      ).toEqual(['text/plain']);
    });
  });

  describe('When the response body is an object', () => {
    let response: TriggerResponse;

    beforeEach(() => {
      const ctx: TriggerContext =
        TriggerContext.fromGrpcTriggerRequest(request);
      ctx.http.res.body = { any: 'object' };
      response = HttpContext.toGrpcTriggerResponse(ctx);
    });

    it('Should convert to bytes', () => {
      expect(response.getData() instanceof Uint8Array).toBe(true);
    });

    it('Should set the content-type to json', () => {
      expect(
        response.getHttp().getHeadersMap().get('content-type').getValueList()
      ).toEqual(['application/json']);
    });
  });

  describe('When the response body is bytes', () => {
    let response: TriggerResponse;

    beforeEach(() => {
      const ctx: TriggerContext =
        TriggerContext.fromGrpcTriggerRequest(request);
      ctx.http.res.body = new TextEncoder().encode('response text');
      response = HttpContext.toGrpcTriggerResponse(ctx);
    });

    it('Should not modify the body', () => {
      expect(response.getData()).toEqual(
        new TextEncoder().encode('response text')
      );
    });

    it('Should set the content-type to octet stream', () => {
      expect(
        response.getHttp().getHeadersMap().get('content-type').getValueList()
      ).toEqual(['application/octet-stream']);
    });
  });

  describe('When the content-type is set', () => {
    let response: TriggerResponse;

    beforeEach(() => {
      const ctx: TriggerContext =
        TriggerContext.fromGrpcTriggerRequest(request);
      ctx.http.res.headers['Content-Type'] = ['application/json'];
      ctx.http.res.body = new TextEncoder().encode(
        '{"json":"which is already text"}'
      );
      response = HttpContext.toGrpcTriggerResponse(ctx);
    });

    it('Should convert to bytes', () => {
      expect(response.getData() instanceof Uint8Array).toBe(true);
    });

    it('Should not change the content-type header(s)', () => {
      expect(
        response.getHttp().getHeadersMap().get('content-type').getValueList()
      ).toEqual(['application/json']);
    });
  });
});
