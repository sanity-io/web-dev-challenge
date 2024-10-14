import {Calendar} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: Calendar,
  fields: [
    defineField({name: 'eventName', type: 'string', title: 'Event Name'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'date', type: 'datetime'}),
    defineField({name: 'location', type: 'string'}),
    defineField({
      name: 'attendees',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'eventName',
      date: 'date',
      location: 'location',
    },
    prepare({title, date, location}) {
      return {
        title,
        subtitle: date && location ? `${date.split('T')[0]} at ${location}` : undefined,
      }
    },
  },
})
