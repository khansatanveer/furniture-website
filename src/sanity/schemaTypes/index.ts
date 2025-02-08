import { type SchemaTypeDefinition } from 'sanity'
import product from '@/sanity/schemaTypes/product'
// import review from '@/constants/review';
import order from '@/sanity/schemaTypes/order';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, order],
}
