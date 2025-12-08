import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout.jsx";
import FormSignUp from "../components/Fragments/FormSignUp";

function signUp() {
  return (
    <AuthLayout>
      <FormSignUp />
    </AuthLayout>
  );
}

export default signUp;