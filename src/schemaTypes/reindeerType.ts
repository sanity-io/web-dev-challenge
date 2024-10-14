import {Lightbulb, LightbulbOff} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const reindeerType = defineType({
  name: 'reindeer',
  type: 'document',
  title: 'Reindeer',
  icon: Lightbulb,
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'shinyNose', type: 'boolean'}),
    defineField({name: 'age', type: 'number'}),
    defineField({name: 'handler', type: 'reference', to: [{type: 'elf'}]}),
    defineField({
      name: 'trainingStatus',
      type: 'string',
      options: {list: ['trained', 'untrained']},
    }),
    defineField({name: 'currentHealth', type: 'string', options: {list: ['healthy', 'sick']}}),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'handler.name',
      shinyNose: 'shinyNose',
    },
    prepare({title, subtitle, shinyNose}) {
      return {
        title,
        subtitle: subtitle ? `Handler: ${subtitle}` : 'No handler assigned',
        media: shinyNose ? Lightbulb : LightbulbOff,
      }
    },
  },
})
