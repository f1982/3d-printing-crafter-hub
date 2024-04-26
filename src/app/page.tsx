import RainbowText from '@/components/atoms/rainbow-text'
import Hero from '@/components/page/hero/hero'
import { siteMetadata } from '@/config/setting'
import CategoryListView from '@/features/post/category-list-view'
import { getCategories, getPosts, getTags } from '@/features/post/post-data'
import PostListView from '@/features/post/post-list-view'
import Tags from '@/features/post/tags'

export const metadata = { ...siteMetadata }

export default async function Page() {
  const posts = await getPosts()
  const categories = (await getCategories()).map((c) => ({
    name: c.name,
    url: `/category/${c.slug}`,
  }))
  const tags = (await getTags()).map((t) => ({
    name: t.name,
    url: `/t/${t.slug}`,
  }))

  return (
    <>
      <Hero
        title={
          <>
            Explore The <RainbowText>Emoji World</RainbowText>
          </>
        }
        subtitle="Discover a world of emoji fun!"
        description="Welcome to Emoji World! Here, you can explore a variety of emoji tools and content. From random emoji generators to emoji guides, there's something for everyone to enjoy."
      />

      <div className="mx-6 mb-36 flex flex-col gap-9 md:flex-row">
        <div className="hidden lg:block">
          <CategoryListView data={categories} />
        </div>
        <div className="flex-1">
          <div className="w-full mb-9 hidden lg:block">
            <Tags data={tags} />
          </div>
          <PostListView posts={posts} />
        </div>
      </div>
    </>
  )
}
