import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes, singletonTypes} from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'grace-church',
  title: 'Grace Church',
  projectId: 'qb55zhrg',
  dataset: 'production',
  basePath: '/admin/church',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ── Administration ──────────────────────────────
            S.listItem()
              .title('Administration')
              .child(
                S.list()
                  .title('Administration')
                  .items([
                    S.listItem()
                      .title('Global Settings')
                      .id('settings')
                      .child(
                        S.document()
                          .schemaType('settings')
                          .documentId('settings'),
                      ),
                    S.documentTypeListItem('prayerRequest').title('Prayer Requests'),
                  ]),
              ),

            S.divider(),

            // ── Media ───────────────────────────────────────
            S.listItem()
              .title('Media')
              .child(
                S.list()
                  .title('Media')
                  .items([
                    S.documentTypeListItem('sermon').title('Sermons'),
                    S.documentTypeListItem('speaker').title('Speakers'),
                  ]),
              ),

            S.divider(),

            // ── Church Life ─────────────────────────────────
            S.listItem()
              .title('Church Life')
              .child(
                S.list()
                  .title('Church Life')
                  .items([
                    S.documentTypeListItem('announcement').title('Announcements'),
                    S.documentTypeListItem('event').title('Events'),
                    S.documentTypeListItem('resource').title('Resources'),
                    S.documentTypeListItem('leadership').title('Leadership'),
                  ]),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Prevent "create new" actions for singleton types
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
})
