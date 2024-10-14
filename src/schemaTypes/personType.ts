import {Users} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const personType = defineType({
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: Users,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'address', type: 'string'}),
    defineField({
      name: 'image',
      type: 'image',
      fields: [
        defineField({
          name: 'imagePrompt',
          type: 'string',
        }),
      ],
      options: {
        aiAssist: {
          imageInstructionField: 'imagePrompt',
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'image',
    },
  },
})
