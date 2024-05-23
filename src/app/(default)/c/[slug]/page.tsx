import { Suspense } from 'react'

import { PageSlugProp } from '@/types/page'
import { Metadata } from 'next/types'

import Spiner from '@/components/atoms/spinner'

import PageContent from '@/features/post/components/page-content'
import { getCategories } from '@/features/post/post-data'

export async function generateStaticParams(): Promise<any> {
  const data = await getCategories()
  return data.map((c) => ({
    slug: c.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageSlugProp): Promise<Metadata> {
  return Promise.resolve({} as any)
}

export default async function CategoryPage({ params }: PageSlugProp) {
  return (
    <>
      <Suspense fallback={<Spiner />}>
        <PageContent category={params.slug} />
      </Suspense>
    </>
  )
}
