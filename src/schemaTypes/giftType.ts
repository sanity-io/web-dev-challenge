import {Gift} from 'lucide-react'
import {defineField, defineType} from 'sanity'

const APPROVAL_STATUS = [
  {value: 'pending', title: 'Pending'},
  {value: 'approved', title: 'Approved'},
  {value: 'denied', title: 'Denied'},
]

export const giftType = defineType({
  name: 'gift',
  type: 'document',
  title: 'Gift Request',
  icon: Gift,
  fields: [
    defineField({name: 'child', type: 'reference', to: [{type: 'child'}]}),
    defineField({
      name: 'wishListItems',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'requestDate', type: 'datetime'}),
    defineField({
      name: 'approvalStatus',
      type: 'string',
      options: {list: APPROVAL_STATUS},
    }),
  ],
  preview: {
    select: {
      title: 'child.name',
      subtitle: 'approvalStatus',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle
          ? APPROVAL_STATUS.find((status) => status.value === subtitle)?.title
          : undefined,
      }
    },
  },
})
