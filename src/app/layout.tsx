import { jsonLdWebsite } from '../config/schema-settings'
import { Analytics } from '../lib/analytics-settings'
import SchemaJsonLd from '../utils/schema-ld/schema-jsonld'
import FloatButton from '@/components/atoms/to-top-button'
import { Toaster } from '@/components/ui/toaster'
import { siteMetadata, siteViewport } from '@/config/setting'
import { CategoryList } from '@/features/post/components/category-list-view'
import '@/globals.css'
import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import SiteLogo from '@/lib/site-logo'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import React from 'react'

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          `flex flex-col min-h-screen antialiased`,
          fontSans.variable,
        )}>
        <SchemaJsonLd jsonLd={jsonLdWebsite}></SchemaJsonLd>
        {/* <SiteHeader /> */}
        <main className={clsx('flex-1', 'flex w-full flex-col')}>
          <div className="mx-6 mb-36 flex flex-col gap-9 md:flex-row">
            <div className="hidden lg:flex flex-col gap-12 py-12 max-w-[10rem] ">
              <SiteLogo />
              <CategoryList />
            </div>
            <div className="flex-1 flex flex-col gap-12 py-12">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </div>

          {/* <div>{children}</div> */}
        </main>

        <Analytics />
        <FloatingElements />
      </body>
    </html>
  )
}
