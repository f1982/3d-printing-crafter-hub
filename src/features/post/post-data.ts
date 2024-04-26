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
          updatedAt: 'desc',
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
