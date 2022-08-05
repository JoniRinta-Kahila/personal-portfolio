import * as fs from 'fs'

const baseUrl = 'https://www.rints.in'

export const staticPaths = fs
  .readdirSync('pages')
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
