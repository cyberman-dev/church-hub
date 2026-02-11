import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig([
  {
    name: 'grace-church',
    title: 'Grace Church',
    projectId: 'qb55zhrg',
    dataset: 'production',
    basePath: '/admin/church',
    plugins: [structureTool(), visionTool()],
  },
])
