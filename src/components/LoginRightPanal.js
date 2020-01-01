import React from "react";

import { Facebook, Block } from "@material-ui/icons";

import Button from "./Button";
import PrivacyPolicy from "./PrivacyPolicy";

const LoginRightPanal = () => {
  return (
    <>
      <PrivacyPolicy />
      <Button
        text='Continue with Facebook'
        icon={<Facebook fontSize='large' />}
        fullWidth
        color='#304D8A'
        hover='#2d4373'
      />
      <Button
        text='Continue with Google'
        icon={<Block fontSize='large' />}
        fullWidth
        color='#2A75F3'
        hover='#0062cc'
      />
    </>
  );
};

export default LoginRightPanal;
