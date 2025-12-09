import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

function SignIn({ onToggle }) {
  return (
    <AuthLayout>
      <FormSignIn />
    </AuthLayout>
  );
}

export default SignIn;
