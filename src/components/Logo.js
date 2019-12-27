import React from "react";

import { Box, Typography } from "@material-ui/core";
import { AccountBalanceWalletOutlined } from "@material-ui/icons";

const LoginPage = () => {
  return (
    <Box
      component='span'
      m={1}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <AccountBalanceWalletOutlined style={{ fontSize: 70 }} />
      <Box
        component='span'
        m={1}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography variant='h4' style={{ fontWeight: 600 }}>
          Wallet
        </Typography>
        <Typography variant='body1'>by budgetbakers</Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
