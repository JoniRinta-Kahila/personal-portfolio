import React from 'react'
import { useMsal } from "@azure/msal-react";


type LogoutButtonProps = {

}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
	const { instance } = useMsal();
	const handleButtonPress = () => {
		instance.logoutRedirect({
			postLogoutRedirectUri: "https://rint.si",
		})
	}
  return <button onClick={() => handleButtonPress()}>Sign-Out</button>
}

export default LogoutButton
