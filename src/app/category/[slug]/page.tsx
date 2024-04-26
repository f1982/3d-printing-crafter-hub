import PageContent from '@/features/post/page-content'
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
      <PageContent category={params.slug} />
      {/* <div className="container">
        <h1>
          Category page: <p>{JSON.stringify(category)}</p>
        </h1>
        <div>{category?.title}</div>
        <CategoryList />

        <Tags
          data={category?.tags.map((tag) => ({
            name: tag.name,
            url: '/t/' + tag.slug,
          }))}
        />

        <PostListView posts={category?.posts} />
      </div> */}
    </>
  )
}
