import {Plane} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const sleighType = defineType({
  name: 'sleigh',
  type: 'document',
  title: 'Sleigh',
  icon: Plane,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'model', type: 'string'}),
    defineField({name: 'mileage', type: 'number', title: 'Distance Flown (in miles)'}),
    defineField({
      name: 'maintenanceHistory',
      type: 'array',
      of: [
        defineField({
          name: 'maintenanceEvent',
          type: 'object',
          fields: [
            defineField({name: 'date', type: 'datetime'}),
            defineField({name: 'description', type: 'text'}),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'model',
    },
  },
})
