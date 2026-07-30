// Scalable Sanity across three languages EN, FR, and VN
export const localeStringSchema = {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string',
    },
    {
      title: 'French',
      name: 'fr',
      type: 'string',
    },
    {
      title: 'Vietnamese',
      name: 'vi',
      type: 'string',
    }
  ]
}