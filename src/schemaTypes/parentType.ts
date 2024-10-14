import {UserCircle} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const parentType = defineType({
  name: 'parent',
  type: 'document',
  title: 'Parent',
  icon: UserCircle,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'address', type: 'string'}),
    defineField({
      name: 'children',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'child'}]}],
    }),
  ],
  preview: {
    select: {name: 'name', children: 'children'},
    prepare({name, children}) {
      return {
        title: name,
        subtitle: children?.length
          ? children.length === 1
            ? '1 child'
            : `${children.length} children`
          : 'No children',
      }
    },
  },
})
