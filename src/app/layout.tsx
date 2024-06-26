import { ReactNode } from 'react'

import { Metadata } from 'next'

import '@/globals.css'
import clsx from 'clsx'
import { Inter as FontSans } from 'next/font/google'

import FloatButton from '@/components/atoms/to-top-button'
import { Toaster } from '@/components/ui/toaster'

import { siteMetadata, siteViewport } from '@/config/setting'

import { jsonLdWebsite } from '../config/schema-settings'
import { Analytics } from '../lib/analytics-settings'
import SchemaJsonLd from '../utils/schema-ld/schema-jsonld'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const viewport = { ...siteViewport }

export const metadata: Metadata = {
  ...siteMetadata,
}

function FloatingElements() {
  return (
    <>
      <Toaster />
      <FloatButton />
      {/* <SNSShare /> */}
    </>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          `flex min-h-screen flex-col antialiased`,
          fontSans.variable,
        )}>
        <SchemaJsonLd jsonLd={jsonLdWebsite}></SchemaJsonLd>
        {/* <SiteHeader /> */}

        {children}
        <Analytics />
        <FloatingElements />
      </body>
    </html>
  )
}
