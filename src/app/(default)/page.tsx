import { Suspense } from 'react'

import Spiner from '@/components/atoms/spinner'

import PageContent from '@/features/post/components/page-content'

import { siteMetadata } from '@/config/setting'

export const metadata = { ...siteMetadata }

export default async function Page() {
  // const group = await getCategories()
  // const group = await getGroups()
  // console.log('group', group)
  return (
    <>
      <Suspense fallback={<Spiner />}>
        <PageContent />
      </Suspense>
    </>
  )
}
