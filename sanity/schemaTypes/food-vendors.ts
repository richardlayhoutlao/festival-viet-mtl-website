export const vendorSchema = {
    name: 'vendor',
    title: 'Festival Vendor',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Vendor Name',
            type: 'string',
            description: 'The official name of the food vendor.',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the goods sold by the food vendor.',
        },
        {
            name: 'specialty',
            title: 'Specialty',
            type: 'string',
            description: 'Specialty or main food item sold by the food vendor.',
        }
    ]
}