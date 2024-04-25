import { getCategory } from '@/features/post/post-data'
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

export default async function CategoryPage({ params }: PageSlugProp) {
  const category = await getCategory(params.slug)

  return (
    <>
      <h1>Category page: </h1>
      <div>{category?.title}</div>
      {category?.posts.map((p) => {
        return (
          <div key={p.title}>
            {p.title}
            {/* {JSON.stringify(p.tags)} */}
          </div>
        )
      })}
    </>
  )
}
