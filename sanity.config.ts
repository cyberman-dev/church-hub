console.log('Sanity ID:', 'qb55zhrg')
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

const SANITY_PROJECT_ID = 'qb55zhrg'
const SANITY_DATASET = 'production'

export default typeof window !== 'undefined'
  ? defineConfig([
      {
        name: 'grace-church',
        title: 'Grace Church',
        projectId: SANITY_PROJECT_ID,
        dataset: SANITY_DATASET,
        basePath: '/admin/church',
        plugins: [structureTool(), visionTool()],
      },
    ])
  : {}
