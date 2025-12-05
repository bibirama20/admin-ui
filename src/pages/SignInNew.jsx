import React from "react";
import AuthLayout from "../components/Layout/AuthLayout"; 
import FormSignInNew from "../components/Fragments/FormSignInNew";

function SignIn() {
  return (
    <AuthLayout>
      <FormSignInNew />
    </AuthLayout>
  );
}

export default SignIn;
