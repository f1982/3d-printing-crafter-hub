import RainbowText from '@/components/atoms/rainbow-text'
import Hero from '@/components/page/hero/hero'
import { siteMetadata } from '@/config/setting'
import { getCategories, getPosts, getTags } from '@/features/post/post-data'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = { ...siteMetadata }

export default async function Page() {
  const posts = await getPosts()
  const categories = await getCategories()
  const tags = await getTags()

  return (
    <>
      {posts.map((p) => {
        return (
          <div key={p.title}>
            <Link href={`/p/${p.slug}`}>
              {p.title}
              <Image src={p?.thumbnail} width={480} height={240} alt=""></Image>
            </Link>
            <div>
              Tags:{' '}
              {p.tags.map((t) => {
                return <div key={t.id}>{t.name} </div>
              })}
            </div>
          </div>
        )
      })}
      <hr />

      <div>
        {categories.map((c) => {
          return (
            <div key={c.id}>
              <Link href={`/category/${c.slug}`}>{c.name}</Link>
            </div>
          )
        })}
      </div>
      <hr />
      <div>
        {tags.map((t) => {
          return (
            <div key={t.id}>
              <Link href={`/tag/${t.slug}`}>{t.name}</Link>
            </div>
          )
        })}
      </div>

      <Hero
        title={
          <>
            Explore The <RainbowText>Emoji World</RainbowText>
          </>
        }
        subtitle="Discover a world of emoji fun!"
        description="Welcome to Emoji World! Here, you can explore a variety of emoji tools and content. From random emoji generators to emoji guides, there's something for everyone to enjoy."
      />

      <div className="container"></div>

      {/* <CookieAcceptance /> */}
      <div className="mb-12"></div>
    </>
  )
}
