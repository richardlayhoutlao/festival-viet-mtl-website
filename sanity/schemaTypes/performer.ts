export const performerSchema = {
    name: 'performer',
    title: 'Festival Performer',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Performer',
            type: 'localeString',
            description: 'The official name of the performer or group.',
        },
        {
            name: 'artType',
            title: 'Type of Art',
            type: 'localeString',
            description: 'What kind of performance do they do?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeText',
            description: 'A description of the performance.',
        },
        {
            name: 'image',
            title: 'Performer Photo',
            type: 'image',
            description: 'Upload a promotional photo of the performer.',
            options: {
                hotspot: true, 
            }
        }
    ]
}