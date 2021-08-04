// [START import]
import { documents } from '@nitric/sdk';
// [END import]

export async function setDocument() {
  // [START snippet]
  interface Product {
    id: string;
    name: string;
    description: string;
  }

  const docs = documents();

  const document = docs.collection<Product>('products').doc('nitric');

  await document.set({
    id: 'nitric',
    name: 'nitric',
    description: 'A development framework!',
  });
  // [END snippet]
  return true;
}
