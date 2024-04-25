import CardGrid from '@/components/atoms/card-grid'
import RainbowText from '@/components/atoms/rainbow-text'
import Hero from '@/components/page/hero/hero'
import { siteMetadata } from '@/config/setting'
import PostItemView from '@/features/post/blog-post-item'
import { getCategories, getPosts, getTags } from '@/features/post/post-data'
import Tags from '@/features/post/tags'
import Link from 'next/link'

export const metadata = { ...siteMetadata }

export default async function Page() {
  const posts = await getPosts()
  const categories = await getCategories()
  const tags = await getTags()

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
          {categories.map((c) => {
            return (
              <div key={c.id}>
                <Link href={`/category/${c.slug}`}>{c.name}</Link>
              </div>
            )
          })}
        </div>
        <div className="flex-1">
          <div className="w-full mb-9 hidden lg:block">
            <Tags data={tags.map((t) => t.name)} />
          </div>
          <CardGrid>
            {posts.map((p) => {
              return (
                <div key={p.title}>
                  <PostItemView
                    title={p.title}
                    coverImage={p.thumbnail}
                    date={p.updatedAt.toUTCString()}
                    url={`/p/${p.slug}`}
                  />
                  {/* {p.title}
              <Image src={p?.thumbnail} width={480} height={240} alt=""></Image> */}
                  {/* <div>
              Tags:{' '}
              {p.tags.map((t) => {
                return <div key={t.id}>{t.name} </div>
              })}
            </div> */}
                </div>
              )
            })}
          </CardGrid>
        </div>
      </div>
    </>
  )
}
