import { type SchemaTypeDefinition } from 'sanity'
import { vendorSchema } from './food-vendors'
import { faqSchema } from './faq'
import { eventSchema } from './event'
import { performerSchema } from './performer'
import { sponsorSchema } from './sponsor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vendorSchema, faqSchema, eventSchema, performerSchema, sponsorSchema], 
}

export const schemaTypes = [vendorSchema, faqSchema, eventSchema, performerSchema, sponsorSchema]