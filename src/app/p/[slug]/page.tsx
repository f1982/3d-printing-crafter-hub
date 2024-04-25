import { getPost } from '@/features/post/post-data'
import { PageSlugProp } from '@/types/page'
import Image from 'next/image'
import { Metadata } from 'next/types'

// export async function generateStaticParams(): Promise<any> {
//   const data = await getCategoryList()
//   return data.map((item: Partial<EmojiCategory>) => ({
//     slug: item.slug,
//   }))
// }

export async function generateMetadata({
  params,
}: PageSlugProp): Promise<Metadata> {
  return Promise.resolve({} as any)
}

export default async function Page({ params }: PageSlugProp) {
  const post = await getPost(params.slug)

  return (
    <>
      <h1>Post page: </h1>
      <div>{post?.title}</div>
      {post?.thumbnail && (
        <Image src={post?.thumbnail} width={480} height={240} alt=""></Image>
      )}
      <div>{JSON.stringify(post)}</div>
    </>
  )
}
