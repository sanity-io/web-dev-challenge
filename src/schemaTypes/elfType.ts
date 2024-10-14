import {Ear} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const ROLES = [
  {value: 'toy-maker', title: 'Toy Maker'},
  {value: 'sleigh-engineer', title: 'Sleigh Engineer'},
  {value: 'reindeer-handler', title: 'Reindeer Handler'},
]

export const elfType = defineType({
  name: 'elf',
  type: 'document',
  title: 'Elf',
  icon: Ear,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({
      name: 'role',
      type: 'string',
      options: {
        list: ROLES,
      },
    }),
    defineField({
      name: 'availability',
      type: 'string',
      options: {
        list: [
          {value: 'full-time', title: 'Full Time'},
          {value: 'part-time', title: 'Part Time'},
          {value: 'seasonal', title: 'Seasonal'},
        ],
      },
    }),
  ],
  preview: {
    select: {name: 'name', role: 'role'},
    prepare({name, role}) {
      return {
        title: name,
        subtitle: role ? ROLES.find((r) => r.value === role)?.title : 'No role',
      }
    },
  },
})
