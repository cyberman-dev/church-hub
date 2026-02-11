import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sermon',
  title: 'Sermon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo link for this sermon.',
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [{type: 'string'}],
      description: "Examples: 'Faith', 'Marriage', 'Purpose'.",
    }),
    defineField({
      name: 'studyGuide',
      title: 'Study Guide',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'PDF file for people to download.',
    }),
    defineField({
      name: 'spotifyPlaylist',
      title: 'Spotify Playlist',
      type: 'url',
      description: 'Link to the Sunday worship songs playlist.',
    }),
  ],
})
