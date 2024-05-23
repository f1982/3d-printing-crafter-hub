import { PageSlugProp } from '@/types/page'
import { Metadata } from 'next/types'

import PageContent from '@/features/post/components/page-content'
import { getTag, getTags } from '@/features/post/post-data'

export async function generateStaticParams(): Promise<any> {
  const data = await getTags()
  return data.map((t) => ({
    slug: t.slug,
  }))
}

export async function generateMetadata({
  params,
}: PageSlugProp): Promise<Metadata> {
  const tag = await getTag(params.slug)

  return {
    title: tag?.name,
    description: '',
    keywords: '',
  }
}

export default async function Page({ params }: PageSlugProp) {
  return (
    <>
      <PageContent tag={params.slug} />
    </>
  )
}
