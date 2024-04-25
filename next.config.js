const { withContentlayer } = require('next-contentlayer')

// You may want to use a more robust revision to cache
// files more efficiently.
// A viable option is `git rev-parse HEAD`.

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,

  // https://github.com/vercel/vercel/discussions/5714
  // TODO: add x-robot-tag config

  images: { unoptimized: true },
  eslint: {
    dirs: ['src'], //or ['pages', 'hooks']
  },
}

module.exports = async () => {
  const withSerwist = (await import('@serwist/next')).default({
    cacheOnNavigation: true,
    swSrc: 'src/lib/sw.ts',
    swDest: 'public/sw.js',
  })
  return withSerwist(withContentlayer(nextConfig))
}
