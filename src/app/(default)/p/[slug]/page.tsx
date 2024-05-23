import { PageSlugProp } from '@/types/page'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'

import { BreadcrumbNav } from '@/components/atoms/breadcrumb-nav'
import PageRows from '@/components/layout/page-rows'

import PostDetail from '@/features/post/components/post-detail'
import { getPost, getPost2, getPosts } from '@/features/post/post-data'

export async function generateStaticParams(): Promise<any> {
  const data = await getPosts()
  return data.map((p) => ({
    slug: p.slug,
  }))
}

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
  let post = await getPost2(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageRows>
        <BreadcrumbNav
          showCurrent={false}
          breadcrumbs={[
            {
              label: 'Home',
              route: '/',
            },
            {
              label: post.Category!.title,
              route: '/c/' + post?.Category?.slug,
            },
            {
              label: post.title,
              route: '/p/' + post.slug,
            },
          ]}
        />

        <PostDetail post={post} />
      </PageRows>
    </>
  )
}
