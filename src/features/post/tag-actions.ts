import prisma from '@/lib/prisma-client'

import { delay } from '@/utils/utils'

import { debuggingMode } from '@/config/setting'

export async function getTagsByCategory(categorySlug: string) {
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

export async function getTag(slug: string) {
  const data = await prisma.tag.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      slug: true,
      posts: true,
    },
  })

  if (debuggingMode) {
    await delay(1500)
  }

  return data
}
