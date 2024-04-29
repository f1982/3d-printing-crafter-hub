import puppeteer, { LaunchOptions } from 'puppeteer'
import slugify from 'slugify'

export async function screenshotVideoByUrl(
  url: string,
  folder: string,
  size: { width: number; height: number } = { width: 1280, height: 720 },
  config: LaunchOptions,
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    console.log(`📸 Screenshot for: ${url}`)
    const thumbnailPath =
      folder + `/${slugify(new URL(url).hostname, { lower: true })}.jpg`
    console.log('thumbnailPath', thumbnailPath)

    const browser = await puppeteer.launch(config)
    const page = await browser.newPage()

    await page.goto(url)
    console.log(`🏄‍♂️ Open the url: ${url}`)

    await page.setViewport(size)
    console.log(`🤌 Set the browser size to ${size.width}x${size.height}`)

    // await delay(1000)
    await page.screenshot({ path: thumbnailPath })
    console.log('✅ Thumbnail file created')

    // Close the browser
    await browser.close()
    resolve(thumbnailPath)
  })
}
