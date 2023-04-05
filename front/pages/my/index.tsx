import React, { ReactElement } from 'react'
import AdminLayout from '../../components/layouts/admin'
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { msalConfig, loginRequest } from '../../auth/authConfig'

enum LoginType {
  popup,
  redirect,
}

const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: LoginType) => {
    if (loginType === LoginType.popup) {
      instance.loginPopup(loginRequest).catch(e => {
        console.log(e);
      })
    } else if (loginType === LoginType.redirect) {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      })
    }
  }

  return (
    <div>
      <button onClick={() => handleLogin(LoginType.redirect)}>Redirect</button>
      <button onClick={() => handleLogin(LoginType.popup)}>Popup</button>
    </div>
  )
}

const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: LoginType) => {
    if (logoutType === LoginType.popup) {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/"
      })
    } else if (logoutType === LoginType.redirect) {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      })
    }
  }

  return (
    <div>
      <button onClick={() => handleLogout(LoginType.redirect)}>Redirect</button>
      <button onClick={() => handleLogout(LoginType.popup)}>Popup</button>
    </div>
  )
}

const MainContent = () => {
  return (
    <div>
      <AuthenticatedTemplate>
        <h1>Authenticated</h1>
        <SignOutButton />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h1>Please sign-in</h1>
        <SignInButton />
      </UnauthenticatedTemplate>
    </div>
  )
}



const Index = () => {
  const msalInstance = new PublicClientApplication(msalConfig)
  return (
    <MsalProvider instance={msalInstance}>
      <MainContent />
    </MsalProvider>
  )
}

Index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>

export default Index
