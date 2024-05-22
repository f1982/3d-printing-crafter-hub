import { ReactNode } from 'react'

import '@/globals.css'

import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import SiteLogo from '@/lib/site-logo'

import {
  CategoryList,
  GroupListView,
} from '@/features/post/components/category-list-view'

import { siteViewport } from '@/config/setting'

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
        <div className="hidden max-w-[18rem] flex-col gap-12 py-12 lg:flex ">
          <SiteLogo />
          <GroupListView />
          <CategoryList />
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
