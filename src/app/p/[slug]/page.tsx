import { BreadcrumbNav } from '@/components/atoms/breadcrumb-nav'
import Prose from '@/components/atoms/prose'
import PageRows from '@/components/layout/page-rows'
import { getPost } from '@/features/post/post-data'
import { PageSlugProp } from '@/types/page'
import Image from 'next/image'
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
  const post = await getPost(params.slug)
  if (!post) {
    return null
  }

  return (
    <>
      <PageRows>
        <BreadcrumbNav
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
              route: '/c/' + post.slug,
            },
          ]}
        />

        {post?.thumbnail && (
          <Image
            className="w-full "
            src={post?.thumbnail}
            width={480}
            height={240}
            alt=""></Image>
        )}

        <Prose>
          <h1>{post?.title}</h1>
          <p>{post?.content}</p>
        </Prose>

        <div>{JSON.stringify(post)}</div>
      </PageRows>
    </>
  )
}
