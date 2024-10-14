import {Building} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const supplierType = defineType({
  name: 'supplier',
  type: 'document',
  title: 'Supplier',
  icon: Building,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'address', type: 'string'}),
  ],
  preview: {
    select: {name: 'name', email: 'email'},
    prepare({name, email}) {
      return {
        title: name,
        subtitle: email,
      }
    },
  },
})
