import * as fs from 'fs'

const baseUrl = process.env.NODE_ENV === 'production' ? './' : 'pages';

export const staticPaths = fs
  .readdirSync(baseUrl)
  .filter(staticPage => {
    return ![
      'api',
      '_app.tsx',
      '404.tsx',
      'sitemap.xml.tsx',
    ].includes(staticPage)
  })
  .map(staticPagePath => {
    return `${baseUrl}/${staticPagePath}`
  })
