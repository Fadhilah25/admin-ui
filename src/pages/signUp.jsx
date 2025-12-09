import React from 'react'
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignup from "../components/Fragments/FormSingup";


function SignUp({ onToggle }) {
  return (
    <AuthLayout>
        <FormSignup onToggle={onToggle} />
    </AuthLayout>
    )
}

export default SignUp