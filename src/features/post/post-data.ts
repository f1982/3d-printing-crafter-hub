import { remark } from 'remark'
import html from 'remark-html'

import prisma from '@/utils/db/prisma'
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

export async function getTags() {
  const data = await prisma.tag.findMany({
    select: {
      id: true,
      slug: true,
      name: true,
      posts: true,
    },
  })

  return data
}

export async function getGroups() {
  const data = await prisma.group.findMany({
    select: {
      id: true,
      name: true,
      categories: true,
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}

export async function getCategories() {
  const data = await prisma.category.findMany({
    select: {
      id: true,
      slug: true,
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
