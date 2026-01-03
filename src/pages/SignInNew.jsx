import React, { useContext } from "react";
import AuthLayout from "../components/Layout/AuthLayout"; 
import FormSignInNew from "../components/Fragments/FormSignInNew";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";

function SignIn() {
  const {login} = useContext(AuthContext);
	const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);
			
			login(refreshToken); 
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
     <FormSignInNew onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default SignIn;
