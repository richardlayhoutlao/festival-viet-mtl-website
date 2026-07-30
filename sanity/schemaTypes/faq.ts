export const faqSchema = {
    name: 'faq',
    title: 'Frequently Asked Question',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'localeString',
            description: 'The frequently asked question.',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'localeText',
            description: 'The answer to the question.',
        }
    ]
}