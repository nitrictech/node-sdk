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
import { CollectionGroupRef } from './collection-group-ref';
import { CollectionRef } from './collection-ref';

// limitations under the License.
describe('Collection Group Ref Tests', () => {
  describe('constructor', () => {
    const colGrpRef = new CollectionGroupRef(null, 'test', null);

    it('should have the provided document client', () => {
      expect(colGrpRef['documentClient']).toBeNull();
    });

    it('should have the provided collection name', () => {
      expect(colGrpRef.name).toEqual('test');
    });

    it('should have the provided parent', () => {
      expect(colGrpRef.parent).toBeNull();
    });
  });

  describe('collection', () => {
    const colGrpRef = new CollectionGroupRef(null, 'test', null);
    const subColGrpRef = colGrpRef.collection('sub-test');

    it('should share its parents document service client', () => {
      expect(subColGrpRef['documentClient']).toEqual(
        colGrpRef['documentClient']
      );
    });

    it('should have the provided name', () => {
      expect(subColGrpRef.name).toEqual('sub-test');
    });

    it("should have a reference to it's parent", () => {
      expect(subColGrpRef.parent).toEqual(colGrpRef);
    });
  });

  describe('query', () => {
    const colGrpRef = new CollectionGroupRef(null, 'test', null);
    const subColGrpRef = colGrpRef.collection('sub-test');

    const q = subColGrpRef.query();

    it('should have a reference to the sub collection', () => {
      expect(q.collection.name).toEqual('sub-test');
    });

    it('should have a reference to the parent collection', () => {
      expect(q.collection.parent.parent.name).toEqual('test');
    });

    it('should have a blank document reference', () => {
      expect(q.collection.parent.id).toEqual('');
    });
  });

  describe('fromCollectionRef', () => {
    describe('no children', () => {
      const colref = new CollectionRef(null, 'test');

      it('should have the collections name', () => {
        expect(colref.name).toEqual('test');
      });
    });
  });
});
