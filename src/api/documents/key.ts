import { Key, Collection } from '../../interfaces/document';

export function getKey(collection: Collection, id?: string) {
  const key = new Key();

  key.setCollection(collection);
  key.setId(id);

  return key;
}
