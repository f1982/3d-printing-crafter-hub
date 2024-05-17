import { MetadataRoute } from 'next'

import { colorSetting, siteSettings } from '@/config/setting'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteSettings.name,
    short_name: siteSettings.name,
    description: siteSettings.description,
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    background_color: colorSetting.lightBg,
    theme_color: colorSetting.theme,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/maskable-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
