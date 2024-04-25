import { siteSettings } from './setting'
import {
  getJsonLdArticle,
  getJsonLdPageBase,
  getJsonLdWebsite,
} from '@/utils/schema-ld/schema-json-utils'

export const jsonLdWebsite = getJsonLdWebsite(siteSettings)

export const jsonLdArticleBase = getJsonLdArticle(siteSettings)

export const jsonLdPageBase = getJsonLdPageBase(siteSettings)
