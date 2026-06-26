import { type SchemaTypeDefinition } from 'sanity'
import { vendorSchema } from './food-vendors'
import { faqSchema } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vendorSchema, faqSchema], 
}

export const schemaTypes = [vendorSchema, faqSchema]