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
import { getKey } from './key';
import { document } from '../../interfaces';

describe('Key Util Tests', () => {
  describe('Given a getKey returns a document Key', () => {
    test('Then getCollection should return the collection', () => {
      const collection = new document.Collection();
      collection.setName('test');

      const key = getKey(collection);

      expect(key.getCollection()).toEqual(collection);
    });

    test('Then getId should return the id', () => {
      const collection = new document.Collection();
      collection.setName('test');

      const key = getKey(collection, 'my-id');

      expect(key.getId()).toEqual('my-id');
    });
  });
});
