import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig([
  {
    name: 'grace-church',
    title: 'Grace Church',
    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    basePath: '/admin/church',
    plugins: [structureTool(), visionTool()],
  },
])
