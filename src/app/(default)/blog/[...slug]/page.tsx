import { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { DisqusComments } from '@/utils/comment/disqus-comment'
import { Mdx } from '@/utils/mdx/mdx-components'

import { Article, Head1 } from '@/components/atoms/typography'

import { siteMetadata, siteUrl } from '@/config/setting'

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords ?? '',
    metadataBase: siteMetadata.metadataBase,
    alternates: {
      canonical: post.slug,
    },
  }
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => {
    return {
      slug: post.slugAsParams.split('/'),
    }
  })
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="container">
        <Article>
          <Head1>{post.title}</Head1>
          <Mdx code={post.body.code} />
        </Article>
      </div>
      <div className="container">
        <DisqusComments
          identifier={`post-${post.slug}`}
          url={`${siteUrl}/theme/${post.slug}`}
          title="Blog post"
        />
      </div>
    </>
  )
}
