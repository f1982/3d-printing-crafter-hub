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

  return (
    <>
      <h1>
        Post page: <p>{JSON.stringify(params)}</p>
      </h1>
      <div>{post?.title}</div>
      {post?.thumbnail && (
        <Image src={post?.thumbnail} width={480} height={240} alt=""></Image>
      )}
      <div>{JSON.stringify(post)}</div>
    </>
  )
}
