import PageContent from '@/features/post/page-content'
import { getPost, getTag } from '@/features/post/post-data'
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
  const tag = await getTag(params.slug)

  return (
    <>
      <h1>
        Post page: <p>{JSON.stringify(params)}</p>
      </h1>
      <div>Tag: {tag?.name}</div>
      <PageContent tag={params.slug} />
      {/* <PostListView posts={tag?.posts} /> */}
    </>
  )
}
