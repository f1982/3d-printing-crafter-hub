import { jsonLdWebsite } from '../config/schema-settings'
import { Analytics } from '../lib/analytics-settings'
import SchemaJsonLd from '../utils/schema-ld/schema-jsonld'
import FloatButton from '@/components/atoms/to-top-button'
import Footer from '@/components/page/footer/footer'
import Header from '@/components/page/header/header'
import { Toaster } from '@/components/ui/toaster'
import { siteMetadata, siteViewport } from '@/config/setting'
import '@/globals.css'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { PropsWithChildren } from 'react'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          `flex flex-col min-h-screen antialiased`,
          fontSans.variable,
        )}>
        <SchemaJsonLd jsonLd={jsonLdWebsite}></SchemaJsonLd>
        <Header />
        <main
          className={clsx(
            'flex-1',
            'flex w-full flex-col',
            'my-6 sm:my-9 lg:my-12',
            'gap-6 sm:gap-9 lg:gap-12',
          )}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <FloatingElements />
      </body>
    </html>
  )
}