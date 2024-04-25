/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://emojiu.cc',
  generateRobotsTxt: false, // the robots.text generated with wrong format
  sitemapSize: 7000, // if it's bigger than 7000, will create sitemap-2.xml
  changefreq: 'weekly',
  outDir: './out',
  exclude: [
    '/manifest.*',
    '/api',
    '/emoji/image', //emoji image is not seo optimised page
    '/home', //WIP feature
    '/tests',
    '/tests/*', //test pages
  ],
}
