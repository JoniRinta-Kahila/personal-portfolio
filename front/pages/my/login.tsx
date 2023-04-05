import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";


const Login = () => {
    const { instance } = useMsal();
  
    useEffect(() => {
      instance.loginRedirect(); // Redirect the user to Azure AD for authentication
    }, [instance]);
  
    return <div>Redirecting to Azure AD...</div>;
  };

// const Login: React.FC = () => {
//   return (
//     <div>
//       Login
//     </div>
//   )
// }

export default Login
