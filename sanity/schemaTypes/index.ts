import { type SchemaTypeDefinition } from 'sanity'
import { vendorSchema } from './food-vendors'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vendorSchema], 
}