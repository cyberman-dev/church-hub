import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'File Upload',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Upload a PDF bulletin, newsletter, or other document.',
      validation: (rule) => rule.required(),
    }),
  ],
})
