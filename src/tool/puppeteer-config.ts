import { PuppeteerLaunchOptions } from 'puppeteer'

export type VideoMode = 'long' | 'short'

// Most common used resolution for mobile is 1080x1920 or 720x1280 pixels
export const getVideoSize = (
  mode: VideoMode = 'long',
): { width: number; height: number } => {
  if (mode === 'short') {
    return { width: 720, height: 1280 }
  } else {
    return { width: 1920, height: 1080 }
  }
}

export const puppeteerConfig: PuppeteerLaunchOptions = {
  // headless: "new",
  headless: false,
  timeout: 0,
  defaultViewport: getVideoSize(),
  protocolTimeout: 60 * 60 * 1000,
  //Use installed Chrome, in case the headless chrome has media limitations
  // executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  //Use GPU to make the animation smooth
  args: [
    '--enable-gpu',
    '--use-angle',
    '--no-sandbox',
    '--disable-web-security',
    '--disable-dev-profile',
    // Rendering
    '--deterministic-mode',
    '--enable-begin-frame-control',
  ],
  waitForInitialPage: true,
  ignoreDefaultArgs: ['--mute-audio'],
}
