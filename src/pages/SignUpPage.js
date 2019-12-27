import React from "react";
import { Typography } from "@material-ui/core";
import { CredentialsForm, PrivacyPolicy, LinkText } from "components";
import SignInSignUpLayout from "./SignInSignUpLayout";

function SignUpPage() {
  return (
    <SignInSignUpLayout>
      <Typography variant='h4' gutterBottom>
        Create Accont!
      </Typography>

      <Typography color={"textSecondary"}>
        Sign up below to create a secure account
      </Typography>

      <CredentialsForm buttonText='Sign up' prompt={<PrivacyPolicy />} />
      <LinkText
        onClick={() => {}}
        text='Already have an account?'
        linkText='Sign In '
        link='signin '
      />
    </SignInSignUpLayout>
  );
}

export default SignUpPage;
