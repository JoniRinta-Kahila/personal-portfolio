import * as fs from 'fs'

const baseUrl = process.env.NODE_ENV === 'production' ? './pages' : 'pages';

const doNotInclude = [
  'api',
  '_app.tsx',
  '404.tsx',
  'sitemap.xml.tsx',
]

export const staticPaths = fs
  .readdirSync(baseUrl)
  .filter(staticPage => {
    return doNotInclude.includes(staticPage) ? null : staticPage.replace('.tsx', '');
  })
  .map(staticPagePath => {
    return `${baseUrl}/${staticPagePath.replace('.tsx', '')}`
  })
