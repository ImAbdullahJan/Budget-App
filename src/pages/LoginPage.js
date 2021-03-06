import React from "react";
import { Typography } from "@material-ui/core";
import { CredentialsForm, LinkText } from "components";
import SignInSignUpLayout from "./SignInSignUpLayout";

function LoginPage() {
  return (
    <SignInSignUpLayout>
      <Typography variant='h4' gutterBottom>
        Welcome back!
      </Typography>

      <CredentialsForm buttonText='Sign in' />
      <LinkText onClick={() => {}} linkText='Forgot Password!' to='signup' />
      <LinkText
        onClick={() => {}}
        text="Don't have account?"
        linkText='Sign Up'
        to='signup'
      />
    </SignInSignUpLayout>
  );
}

export default LoginPage;
