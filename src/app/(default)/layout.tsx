import { ReactNode, Suspense } from 'react'

import '@/globals.css'
import Link from 'next/link'

import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'

import Spiner from '@/components/atoms/spinner'

import GroupsView from '@/features/post/components/groups-view'

import { siteSettings, siteViewport } from '@/config/setting'

export const revalidate = 2 // revalidate the data at most every hour

export const viewport = { ...siteViewport }

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode
  modal: ReactNode
}) {
  return (
    <>
      <div className="mx-4 mb-36 flex flex-col gap-9 md:flex-row">
        <div className="hidden max-w-[18rem] flex-col gap-12 py-12 lg:flex">
          <Link href={'/'}>{siteSettings.logo}</Link>
          <div className="sticky top-9">
            <Suspense fallback={<Spiner />}>
              <GroupsView />
            </Suspense>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-12 py-12">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </div>
      {modal}
    </>
  )
}
