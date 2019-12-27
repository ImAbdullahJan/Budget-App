import React, { Component } from "react";

import { Box, Typography } from "@material-ui/core";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

export class LoginPage extends Component {
  render() {
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
        <AccountBalanceWalletOutlinedIcon style={{ fontSize: 70 }} />
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
  }
}

export default LoginPage;
