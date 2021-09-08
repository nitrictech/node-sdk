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
} from '../interfaces/faas';
import { TriggerContext, HttpContext, EventContext } from './context';

describe('NitricTrigger.fromGrpcTriggerRequest', () => {
  describe('From a HttpTriggerRequest', () => {
    let trigger: TriggerContext;

    beforeAll(() => {
      const ctx = new GrpcHttpTriggerRequest();
      ctx.setMethod('GET');
      ctx.setPath('/test/');
      ctx.getHeadersMap().set('test', 'test');
      ctx.getQueryParamsMap().set('test', 'test');
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
      expect(trigger.http.req.body).toBe('Hello World');
    });

    it('should have to provided headers', () => {
      expect(trigger.http.req.headers['test']).toBe(['test']);
    });

    it('should have to provided query params', () => {
      expect(trigger.http.req.query['test']).toBe('test');
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
