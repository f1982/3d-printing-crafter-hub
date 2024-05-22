import { Metadata, Viewport } from 'next'

import { SiteSetting } from '@/types/page'
import { Robots } from 'next/dist/lib/metadata/types/metadata-types'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

export const siteHostname = 'emojiu.cc'
export const siteUrl = `https://${siteHostname}`

export const GoogleAnalyticsID = 'G-L8EFRS04CF'

export const disqus = {
  shortname: 'emojiu',
}

export const siteSettings: SiteSetting = {
  name: 'Emoji You',
  url: siteUrl,
  title: 'Copy paste iphone emojis, Get Heart, Laughing, Skull, Nerd Emojis',
  description:
    'Search for emojis with just one click! Explore a variety of emojis, including heart, laughing, skull, nerd, sad, iPhone, eyes, star, thumbs up, kiss, and heart hand emojis. Enhance your online communication and express yourself effortlessly.',
  keywords:
    'Emoji Copy Paste, Heart Emoji, Laughing Emoji, Skull Emoji, Nerd Emoji, Sad Emoji, Get Emojis in One Click, iPhone Emoji, Eyes Emoji, Star Emoji, Thumbs Up Emoji, Kiss Emoji, Heart Hand Emoji',
  author: 'emoji you',
  creator: '@emojiucc',
}

// Add icon image in public folder
const icons = {
  icon: '/icon.png',
  shortcut: '/icon.png',
  apple: '/apple-icon.png',
}

//TODO: add bing bot
const robots: Robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    noimageindex: false,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
}

export const openGraph: OpenGraph = {
  type: 'website',
  url: siteUrl,
  title: siteSettings.title,
  description: siteSettings.description,
  siteName: siteSettings.name,
  images: [
    {
      url: '/og-image.png',
    },
  ],
}

export const twitter: Twitter = {
  card: 'summary_large_image',
  site: siteSettings.creator,
  creator: siteSettings.creator,
  title: siteSettings.title,
  description: siteSettings.description,
  images: ['/og-image.png'],
}

export const colorSetting = {
  lightBg: '#f3f1f4',
  darkBg: '#1b161d',
  theme: '#cb9fdd',
}

export const siteViewport: Viewport = {
  // https://dequeuniversity.com/rules/axe/4.7/meta-viewport
  width: 'device-width',
  initialScale: 1,
  maximumScale: 3,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: colorSetting.darkBg },
    { media: '(prefers-color-scheme: light)', color: colorSetting.lightBg },
  ],
}

export const siteMetadata: Metadata = {
  category: 'technology',
  title: siteSettings.title,
  description: siteSettings.description,
  keywords: siteSettings.keywords,
  publisher: siteSettings.creator,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  icons,
  robots,
  openGraph,
  twitter,
  verification: {
    other: {
      'msvalidate.01': '8C4A5C5044C69129C4355BCC538281EC',
    },
  },
  // for pwa application
  applicationName: siteSettings.name,
  appleWebApp: {
    title: siteSettings.title,
    capable: true,
    statusBarStyle: 'default',
  },
}

export const socialMediaUrls = {
  youtube: 'https://youtube.com/@emojiyou?si=HzrJOJg8FyI51bjj',
  twitter: 'https://twitter.com/emojiucc',
}
