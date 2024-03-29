import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MsalProvider } from "@azure/msal-react"
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from '../auth/authConfig'

export default function App({ Component, pageProps }: AppProps) {
  const msalInstance = new PublicClientApplication(msalConfig)
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  )
}
