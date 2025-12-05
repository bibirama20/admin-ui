import React from "react";
import AuthLayoutNew from "../components/Layout/AuthLayoutNew"; 
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUp() {
  return (
    <AuthLayoutNew>
      <FormSignUp />
    </AuthLayoutNew>
  );
}

export default SignUp;
