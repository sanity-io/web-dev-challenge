import {InspectionPanel} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const materialType = defineType({
  name: 'material',
  type: 'document',
  title: 'Raw Material',
  icon: InspectionPanel,
  fields: [
    defineField({name: 'name', type: 'string', title: 'Material Name'}),
    defineField({name: 'quantity', type: 'number', title: 'Quantity On Hand'}),
    defineField({name: 'supplier', type: 'reference', to: [{type: 'supplier'}]}),
    defineField({name: 'reorderThreshold', type: 'number'}),
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
