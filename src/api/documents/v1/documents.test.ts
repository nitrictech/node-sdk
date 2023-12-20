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
import { documents } from './documents';

describe('Document Client Tests', () => {
  describe('Given a new collection', () => {
    test('Then collection should contain correct collection reference', () => {
      const collection = documents().collection('customers');

      expect(collection.name).toEqual('customers');
    });

    test('Then collection.doc should return a document reference with correct collection and id', () => {
      const doc = documents().collection('customers').doc('id');

      expect(doc.parent.name).toEqual('customers');
      expect(doc.id).toEqual('id');
    });

    test('Then collection.query should return a query with the correct collection reference', () => {
      const query = documents().collection('customers').query();

      expect(query.collection.name).toEqual('customers');
    });
  });

  describe('Given a new nested collection', () => {
    test('Then nested collection should contain correct parent references', () => {
      const doc = documents().collection('customers').doc('id');
      const collection = doc.collection('orders');

      expect(collection.name).toEqual('orders');
      expect(collection.parent).toBeDefined();
      expect(collection.parent.parent.name).toEqual('customers');
    });

    test('Then collection.doc should return a document reference with correct collection and id', () => {
      const doc = documents().collection('customers').doc('id');
      const orderDoc = doc.collection('orders').doc('orderId');

      expect(orderDoc.parent.name).toEqual('orders');
      expect(orderDoc.id).toEqual('orderId');
      expect(orderDoc.parent.parent).toBeDefined();
      expect(orderDoc.parent.parent.parent.name).toEqual('customers');
    });

    test('Then collection.query should return a query with the correct collection reference', () => {
      const doc = documents().collection('customers').doc('id');
      const query = doc.collection('orders').query();

      expect(query.collection.name).toEqual('orders');
      expect(query.collection.parent).toBeTruthy();
      expect(query.collection.parent.parent.name).toEqual('customers');
    });
  });
});
