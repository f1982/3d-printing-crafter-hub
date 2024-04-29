import { BreadcrumbNav } from '@/components/atoms/breadcrumb-nav'
import Prose from '@/components/atoms/prose'
import PageRows from '@/components/layout/page-rows'
import { getPost, getPosts } from '@/features/post/post-data'
import { NextShare } from '@/lib/sns-share'
import { PageSlugProp } from '@/types/page'
import clsx from 'clsx'
import Image from 'next/image'
import { Metadata } from 'next/types'

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
  const post = await getPost(params.slug)
  if (!post) {
    return null
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

        {post?.thumbnail && (
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              className="w-full blur-md"
              src={post?.thumbnail}
              width={480}
              height={240}
              alt=""></Image>
            <div
              className={clsx(
                'mb-3 absolute top-0 left-0 w-full h-full ',
                'bg-primary/20',
                'pointer-events-none',
              )}></div>
            <h1
              className="absolute bottom-12 px-6 text-3xl font-bold text-white"
              style={{
                textShadow: '0px 1px 0px rgba(0, 0, 0, 0.6)',
              }}>
              {post?.title}
            </h1>
          </div>
        )}

        <Prose>
          <p>{post?.content}</p>
        </Prose>

        {/* <div>{JSON.stringify(post)}</div> */}

        <div className="flex flex-row justify-center">
          <NextShare title={post.title} url=""></NextShare>
        </div>
      </PageRows>
    </>
  )
}
