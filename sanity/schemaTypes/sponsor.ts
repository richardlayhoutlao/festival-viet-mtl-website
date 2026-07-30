export const sponsorSchema = {
    name: 'sponsor',
    title: 'Festival Sponsor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Sponsor Name',
            type: 'localeString',
            description: 'The official name of the sponsoring company or organization.',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'logo',
            title: 'Sponsor Logo',
            type: 'image',
            description: 'Upload the sponsor\'s logo (transparent PNG preferred).',
            options: {
                hotspot: true, 
            }
        },
        {
            name: 'description',
            title: 'Description (Optional)',
            type: 'localeText',
            description: 'Optional: A short blurb about the sponsor and their contribution.',
        }
    ]
}