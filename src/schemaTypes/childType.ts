import {Baby} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const childType = defineType({
  name: 'child',
  type: 'document',
  title: 'Child',
  icon: Baby,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'age', type: 'number'}),
    defineField({name: 'address', type: 'string', title: 'Home Address'}),
    defineField({
      name: 'status',
      type: 'string',
      options: {list: ['naughty', 'nice'], layout: 'radio', direction: 'horizontal'},
      initialValue: 'nice',
    }),
    defineField({name: 'wishList', type: 'array', of: [{type: 'string'}]}),
  ],
  preview: {
    select: {
      name: 'name',
      age: 'age',
      status: 'status',
    },
    prepare({name, age, status}) {
      return {
        title: name + ` (${age})`,
        subtitle: status ? status.charAt(0).toUpperCase() + status.slice(1) : undefined,
      }
    },
  },
})
