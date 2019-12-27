import React, { Component } from "react";

import { Box, Typography, Container, Paper } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import LoginRightPanal from "./LoginRightPanal";

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  containerStyles: {
    display: "flex",
    height: "auto",
    width: "60vw"
  },
  leftBoxStyles: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "50%",
    padding: 50
  },
  rightBoxStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    height: "auto",
    width: "50%",
    padding: 50
  }
};

export class SignIn extends Component {
  render() {
    return (
      <Box component='div' m={3} className={this.props.classes.flexCenter}>
        <Paper elevation={7}>
          <Container
            component='div'
            disableGutters
            fixed
            className={this.props.classes.containerStyles}
          >
            <Box component='div' className={this.props.classes.leftBoxStyles}>
              <Typography variant='h4' gutterBottom>
                Welcome back!
              </Typography>

              <form>
                <InputField label={"Email"} />
                <InputField label={"Password"} />
                <SubmitButton buttonText={"Sign In"} />
              </form>
            </Box>
            <Box component='div' className={this.props.classes.rightBoxStyles}>
              <LoginRightPanal />
            </Box>
          </Container>
        </Paper>
      </Box>
    );
  }
}

export default withStyles(styles)(SignIn);
