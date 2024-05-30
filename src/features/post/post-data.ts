import { remark } from 'remark'
import html from 'remark-html'

import prisma from '@/utils/db/prisma'
import { delay } from '@/utils/utils'

import { debuggingMode } from '@/config/setting'

export async function getPosts() {
  console.log('prisma.post', prisma.post)
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      thumbnail: true,
      tags: true,
      url: true,
      category: true,
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
      category: true,
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
    tags: p.tags?.map((t: any) => t.name),
  }))
}

export async function getTagsByCategorySlug(categorySlug: string) {
  console.log('getTagsByCategorySlug')
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: categorySlug,
      },
      include: {
        tags: true,
      },
    })

    if (!category) {
      throw new Error(`Category with slug "${categorySlug}" not found`)
    }

    return category.tags
  } catch (error) {
    console.error('Error fetching tags:', error)
    throw error
  }
}

export async function getGroups() {
  const data = await prisma.categoryGroup.findMany({
    select: {
      id: true,
      title: true,
      categories: {
        select: {
          id: true,
          title: true,
          slug: true,
          description: true,
        },
      },
    },
  })

  // if (debuggingMode) {
  //   await delay(1500)
  // }

  return data
}

export async function getCategories() {
  const data = await prisma.category.findMany({
    select: {
      id: true,
      slug: true,
      description: true,
      name: true,
    },
  })

  return data
}

export async function getCategory(slug: string) {
  const data = await prisma.category.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      posts: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          tags: true,
        },
      },
      tags: true,
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}

export async function getTag(slug: string) {
  const data = await prisma.tag.findUnique({
    where: { slug },
    select: {
      id: true,
      name: true,
      slug: true,
      posts: true,
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
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
