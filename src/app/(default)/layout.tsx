import { siteViewport } from '@/config/setting'
import { CategoryList } from '@/features/post/components/category-list-view'
import '@/globals.css'
import SiteFooter from '@/lib/site-footer'
import SiteHeader from '@/lib/site-header'
import SiteLogo from '@/lib/site-logo'
import Link from 'next/link'
import { ReactNode } from 'react'

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
      <div className="mx-6 mb-36 flex flex-col gap-9 md:flex-row">
        <div className="hidden lg:flex flex-col gap-12 py-12 max-w-[10rem] ">
          <SiteLogo />
          <CategoryList />
          <Link href="/login">login</Link>
        </div>
        <div className="flex-1 flex flex-col gap-12 py-12">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </div>
      {modal}
    </>
  )
}
