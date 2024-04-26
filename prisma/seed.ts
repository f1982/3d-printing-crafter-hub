import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function cleanupData() {
  try {
    // Delete all existing categories, posts, and tags
    await prisma.category.deleteMany({})
    await prisma.post.deleteMany({})
    await prisma.tag.deleteMany({})
  } catch (error) {
    console.error('Error cleaning up data:', error)
    throw error
  }
}

async function seedData() {
  // Create sample tags
  const tags = [
    'dev',
    'react',
    'nodejs',
    'javascript',
    'python',
    'java',
    'csharp',
    'ruby',
    'php',
    'go',
    'swift',
    'kotlin',
    'flutter',
    'angular',
    'vue',
    'nextjs',
    'gatsby',
    'graphql',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'gcp',
    'devops',
    'agile',
    'scrum',
    'tdd',
    'ux',
    'ui',
    'design',
  ]

  for (const tag of tags) {
    await prisma.tag.create({
      data: {
        slug: tag,
        name: tag.charAt(0).toUpperCase() + tag.slice(1),
      },
    })
  }

  const getRandomTags = async () => {
    const tagCount = Math.floor(Math.random() * 5) + 1
    const tagIds: number[] = []

    for (let j = 0; j < tagCount; j++) {
      const tag = tags[Math.floor(Math.random() * tags.length)]
      const tagData = await prisma.tag.findUnique({ where: { slug: tag } })
      if (tagData) {
        tagIds.push(tagData.id)
      }
    }
    return tagIds
  }

  // Create sample categories
  const categories = [
    'technology',
    'lifestyle',
    'travel',
    'food',
    'sports',
    'fashion',
    'health',
    'business',
    'entertainment',
    'education',
  ]

  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category,
        slug: category,
        title: category.charAt(0).toUpperCase() + category.slice(1),
        tags: {
          connect: (await getRandomTags()).map((id) => ({ id })),
        },
        description: faker.lorem.sentence(),
      },
    })
  }

  // Create sample posts
  for (let i = 0; i < 35; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const categoryData = await prisma.category.findUnique({
      where: { slug: category },
    })

    const mockTitle = faker.lorem.sentence()
    await prisma.post.create({
      data: {
        title: mockTitle,
        category: category,
        slug: faker.helpers.slugify(mockTitle.toLowerCase().replace('.', '')),
        keywords: faker.lorem.words(),
        description: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(),
        thumbnail: faker.image.urlPicsumPhotos(),
        categoryId: categoryData?.id,
        tags: {
          connect: (await getRandomTags()).map((id) => ({ id })),
        },
      },
    })
  }
}

async function main() {
  try {
    // Clean up existing data
    await cleanupData()

    // Seed mock data
    await seedData()
  } catch (error) {
    console.error('Error seeding database:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
