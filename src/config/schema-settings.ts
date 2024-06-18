import {
  getJsonLdArticle,
  getJsonLdPageBase,
  getJsonLdWebsite,
} from '@/utils/schema-ld/schema-json-utils'

import { siteSettings } from './setting'

export const jsonLdWebsite = getJsonLdWebsite(siteSettings)

export const jsonLdArticleBase = getJsonLdArticle(siteSettings)

export const jsonLdPageBase = getJsonLdPageBase(siteSettings)
