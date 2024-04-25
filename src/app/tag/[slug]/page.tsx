import { getTag } from '@/features/post/post-data'
import { PageSlugProp } from '@/types/page'
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
  const tag = await getTag(params.slug)

  return (
    <>
      <h1>Tag page: </h1>
      <div>{tag?.name}</div>
      <div>
        {tag?.posts.map((p) => {
          return <div key={p.title}>{p.title}</div>
        })}
      </div>
    </>
  )
}
