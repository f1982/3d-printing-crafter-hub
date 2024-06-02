import { remark } from 'remark'
import html from 'remark-html'

import prisma from '@/lib/prisma-client'

import { delay } from '@/utils/utils'

import { debuggingMode } from '@/config/setting'

export async function getPosts() {
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      thumbnail: true,
      tags: true,
      url: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}

export async function getPostsBy(category?: string, tag?: string) {
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      thumbnail: true,
      tags: true,
      url: true,
      updatedAt: true,
    },
    where: {
      AND: [
        category
          ? {
              Category: {
                slug: category,
              },
            }
          : {},
        tag
          ? {
              tags: {
                some: {
                  slug: tag,
                },
              },
            }
          : {},
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}

export async function getProcessedPosts(category?: string, tag?: string) {
  let posts = await getPostsBy(category, tag)
  return posts?.map((p) => ({
    ...p,
    url: p.description ? `/p/${p.slug}` : p.url,
    thumbnail: p.thumbnail?.startsWith('https://')
      ? p.thumbnail
      : '/images/' + p.thumbnail,
    tags: p.tags?.map((t: any) => t.title),
  }))
}

export async function getPost(slug: string) {
  const data = await prisma.post.findUnique({
    where: { slug },
    include: {
      Category: true,
      tags: true,
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: true }).process(markdown)
  return result.toString()
}

export async function getProcessedPost(slug: string) {
  let post = await getPost(slug)
  if (!post) {
    return null
  }

  post.thumbnail = post?.thumbnail?.startsWith('https://')
    ? post.thumbnail
    : '/images/' + post.thumbnail

  post.content = await markdownToHtml(post.content || '')
  return post
}
