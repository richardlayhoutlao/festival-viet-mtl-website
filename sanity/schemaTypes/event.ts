export const eventSchema = {
    name: 'event',
    title: 'Festival Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Event Title',
            type: 'localeString',
            description: 'The name of the performance or activity.',
        },
        {
            name: 'startTime',
            title: 'Date and Time',
            type: 'datetime',
            description: 'When does this event start? (Used to sort the schedule chronologically)',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'localeString',
            description: 'Where is the event happening at?',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'localeText', 
            description: 'Details about the event or performer.',
        }
    ]
}