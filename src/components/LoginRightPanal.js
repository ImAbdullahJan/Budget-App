import React, { Component } from "react";

import SocialLogin from "./SocialLogin";
import PrivacyPolicy from "./PrivacyPolicy";

class LoginRightPanal extends Component {
  render() {
    return (
      <>
        <PrivacyPolicy />
        <SocialLogin facebook />
        <SocialLogin google />
      </>
    );
  }
}

export default LoginRightPanal;
