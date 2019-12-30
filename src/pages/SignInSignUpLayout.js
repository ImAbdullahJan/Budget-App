import React from "react";
import { withStyles, Container, Box, Paper } from "@material-ui/core";
import { Logo, LoginRightPanal } from "components";

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

function SignInSignUpLayout({ classes, children }) {
  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: "#EFF0F2",
        minHeight: "100vh",
        paddingTop: 10,
        paddingBottom: 10
      }}
    >
      <Logo />

      <Box component='div' m={3} className={classes.flexCenter}>
        <Paper elevation={7}>
          <Container
            component='div'
            disableGutters
            fixed
            className={classes.containerStyles}
          >
            <Box component='div' className={classes.leftBoxStyles}>
              {children}
            </Box>
            <Box component='div' className={classes.rightBoxStyles}>
              <LoginRightPanal />
            </Box>
          </Container>
        </Paper>
      </Box>
    </Container>
  );
}

export default withStyles(styles)(SignInSignUpLayout);
