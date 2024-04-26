import PageContent from '@/features/post/components/page-content'
import { getPost } from '@/features/post/post-data'
import { PageSlugProp } from '@/types/page'
import { Metadata } from 'next/types'

export async function generateMetadata({
  params,
}: PageSlugProp): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags.map((tag) => tag.name).join(', '),
  }
}

export default async function Page({ params }: PageSlugProp) {
  return (
    <>
      <PageContent tag={params.slug} />
    </>
  )
}
