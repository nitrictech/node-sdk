// [START import]
import { documents } from '@nitric/sdk';
// [END import]

export async function getDocument() {
  // [START snippet]
  const documentRef = documents().collection('products').doc('nitric');

  const product = await documentRef.get();
  // [END snippet]
  return product;
}
