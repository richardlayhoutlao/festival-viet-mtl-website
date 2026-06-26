import { type SchemaTypeDefinition } from 'sanity'
import { vendorSchema } from './food-vendors'
import { faqSchema } from './faq'
import { eventSchema } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vendorSchema, faqSchema, eventSchema], 
}

export const schemaTypes = [vendorSchema, faqSchema, eventSchema]