// Import the necessary modules and functions for testing
import { puppeteerConfig } from './puppeteer-config'
import { screenshotVideoByUrl } from './screenshot-by-url'
import { expect, test } from 'vitest'

// Test case 1: Testing with a valid topic and count
test('capture screenshot by given url', async () => {
  const path = await screenshotVideoByUrl(
    'https://google.com',
    './out/test',
    { width: 1920, height: 1080 },
    puppeteerConfig,
  )

  console.log('path', path)
  expect(path).toBeTruthy()
})
