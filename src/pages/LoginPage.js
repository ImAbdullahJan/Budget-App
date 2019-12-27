import React, { Component } from "react";

import { Logo, SignIn } from "components";

import { Container } from "@material-ui/core";

export class LoginPage extends Component {
  render() {
    return (
      <>
        <Container
          maxWidth={false}
          style={{
            backgroundColor: "#EFF0F2",
            width: "100vw",
            minHeight: "100vh",
            paddingTop: 1
          }}
        >
          <Logo />
          <SignIn />
        </Container>
      </>
    );
  }
}

export default LoginPage;
