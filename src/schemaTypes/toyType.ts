import {ToyBrick} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const toyType = defineType({
  name: 'toy',
  type: 'document',
  title: 'Toy',
  icon: ToyBrick,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'description', type: 'text'}),
    defineField({name: 'quantity', type: 'number'}),
    defineField({name: 'storageLocation', type: 'reference', to: [{type: 'warehouse'}]}),
    defineField({name: 'manufactureDate', type: 'datetime'}),
  ],
  preview: {
    select: {name: 'name', quantity: 'quantity'},
    prepare({name, quantity}) {
      return {
        title: name,
        subtitle: quantity ? `${quantity} in stock` : 'Out of stock',
      }
    },
  },
})
