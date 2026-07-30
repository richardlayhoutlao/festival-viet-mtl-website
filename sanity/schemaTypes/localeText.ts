export const localeTextSchema = {
  title: 'Localized Text',
  name: 'localeText',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'text', // This ensures a multi-line box!
    },
    {
      title: 'French',
      name: 'fr',
      type: 'text',
    },
    {
      title: 'Vietnamese',
      name: 'vi',
      type: 'text',
    }
  ]
}