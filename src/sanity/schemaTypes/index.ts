import sermon from './sermon'
import speaker from './speaker'
import settings from './settings'
import announcement from './announcement'
import event from './event'
import leadership from './leadership'
import resource from './resource'
import prayerRequest from './prayerRequest'

export const schemaTypes = [
  sermon,
  speaker,
  settings,
  announcement,
  event,
  leadership,
  resource,
  prayerRequest,
]

/** Document types that should be treated as singletons (one instance only). */
export const singletonTypes = new Set(['settings'])

/**
 * Types managed entirely by the custom structure below.
 * Filtering these out of documentTypeListItems() prevents duplicates.
 */
export const hiddenTypes = new Set([
  'settings',
  'prayerRequest',
  'sermon',
  'speaker',
  'announcement',
  'event',
  'leadership',
  'resource',
])
