// import '../styles/globals.scss';
// import type { AppProps } from 'next/app';
// import type { ReactElement, ReactNode } from 'react';
// import PageWithLayoutType from '../types/pageWithLayouts'

// type AppLayoutProps = AppProps & {
//   Component: PageWithLayoutType
//   pageProps: any
// }

// const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
//   const Layout = Component.layout || ((children) => <>{children}</>)

//     return (
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     )
// }

// export default MyApp

import '../styles/globals.scss';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}