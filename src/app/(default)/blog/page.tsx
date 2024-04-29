import { Article } from '../../../components/atoms/typography'
import { Post, allPosts } from '@/app/../../.contentlayer/generated'
import { siteMetadata } from '@/config/setting'
import { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Emojiu Blog: The Ultimate Guide to Using Emojis Online 🚀',
    description:
      'Learn how to use emojis effectively in your online communication. Find out the meaning, history, and etiquette of emojis, and get tips and tricks for using emojis.',
    keywords:
      'emojis, emoji meaning, emoji history, emoji etiquette, emoji tips, emoji tricks, emoji copy paste, emoji keyboard',
    metadataBase: siteMetadata.metadataBase,
    alternates: {
      canonical: '/blog',
    },
  }
}

export default function Blog() {
  return (
    <div className="container">
      <Article>
        {allPosts
          .sort((a: Post, b: Post) => {
            const db = new Date(b.date)
            const da = new Date(a.date)
            return db.getTime() - da.getTime()
          })
          .map((post) => (
            <Article key={post._id}>
              <Link href={post.slug}>
                <h2 className="font-serif">{post.title}</h2>
              </Link>
              {post.description && <p>{post.description}</p>}
            </Article>
          ))}
      </Article>
    </div>
  )
}
