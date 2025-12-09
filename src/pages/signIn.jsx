import React from 'react'
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSigin";


function SignIn({ onToggle }) {
  return (
    <AuthLayout>
        <FormSignIn onToggle={onToggle} />
    </AuthLayout>
    )
}

export default SignIn