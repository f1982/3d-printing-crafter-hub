import { Icons } from 'next/dist/lib/metadata/types/metadata-types'

export type SiteSetting = {
  name: string
  url: string
  title: string
  slogan: string
  description: string
  keywords: string
  author: string
  creator: string
  logo: React.ReactNode
}

export type PageSetting = {
  route: string
  name: string
  title: string
  description: string
  keywords: string
  url: string
  icons?: Icons
  image?: string
}

export type PageSlugProp = {
  params: { slug: string }
}

export interface PageIdProps {
  params: { id: string }
}
