import matter from 'gray-matter'
import { remark } from 'remark'
import lineBreaks from 'remark-breaks'
import html from 'remark-html'

import prisma from '@/utils/db/prisma'

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

  return data
}

export async function getPost(slug: string) {
  const data = await prisma.post.findUnique({
    where: { slug },
    // select: {
    //   id: true,
    //   title: true,
    //   slug: true,
    //   description: true,
    //   thumbnail: true,
    //   tags: true,
    //   category: true,
    // },
    include: {
      Category: true,
      tags: true,
    },
  })

  return data
}

export async function getPost2(slug: string) {
  let post = await getPost(slug)
  if (!post) {
    return null
  }

  post.thumbnail = post?.thumbnail?.startsWith('https://')
    ? post.thumbnail
    : '/images/' + post.thumbnail

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(post.content || '')
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(lineBreaks)
    .use(html)
    // .process(matterResult.content)
    .process(post.content || '')
  const contentHtml = processedContent.toString()
  return { ...post, contentHtml }
}
