import {Feather} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: Feather,
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'content', type: 'text'}),
    defineField({name: 'published', type: 'datetime'}),
    defineField({name: 'updated', type: 'datetime'}),
    defineField({name: 'image', type: 'image'}),
    defineField({name: 'author', type: 'reference', to: [{type: 'person'}, {type: 'elf'}]}),
    defineField({name: 'tags', type: 'array', of: [{type: 'string'}]}),
  ],
})
