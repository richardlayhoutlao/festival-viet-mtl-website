export const vendorSchema = {
    name: 'vendor',
    title: 'Festival Vendor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Vendor Name',
            type: 'localeString',
            description: 'The official name of the food vendor.',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeText',
            description: 'Description of the goods sold by the food vendor.',
        },
        {
            name: 'specialty',
            title: 'Specialty',
            type: 'localeString',
            description: 'Specialty or main food item sold by the food vendor.',
        },
        {
            name: 'image',
            title: 'Food Vendor Image',
            type: 'image',
            description: 'Upload a photo of the food vendor\'s logo or product',
            options: {
                hotspot: true,
            }
        }
    ]
}