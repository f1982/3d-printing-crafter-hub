import { controlSoftware } from './data/printers'
import { puppeteerConfig } from './puppeteer-config'
import { screenshotVideoByUrl } from './screenshot-by-url'

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  for (const data of controlSoftware) {
    const filename = await screenshotVideoByUrl(
      data.url,
      './public/images',
      { width: 1920, height: 1080 },
      puppeteerConfig,
    )

    await prisma.post.create({
      data: {
        category: data.category,
        categoryId: 86,
        slug: data.slug,
        title: data.name,
        content: data.content,
        description: data.description,
        keywords: data.keywords,
        thumbnail: filename,
        url: data.url,
      },
    })

    // await prisma.post.update({
    //   where: {
    //     url: data.url,
    //     categoryId: undefined,
    //   },
    //   data: {
    //     categoryId: 84,
    //   },
    // })
  }
}

try {
  main()
} catch (error) {
  console.log('error', error)
}
