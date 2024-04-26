import { colorSetting, siteSettings } from '@/config/setting'
import { MetadataRoute } from 'next'

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
