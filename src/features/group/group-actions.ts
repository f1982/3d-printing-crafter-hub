import prisma from '@/lib/prisma-client'

import { delay } from '@/utils/utils'

import { debuggingMode } from '@/config/setting'

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
      title: true,
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
