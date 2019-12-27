import React, { Component } from "react";

import { Button, Link, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  buttonRoot: {
    borderRadius: 27,
    width: "100%",
    backgroundColor: "#00aa70",
    color: "#ffffff",
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    textTransform: "capitalize",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#00915f"
    },
    "&:active": {
      color: "#fff",
      backgroundColor: "#00915f"
    },
    "&:focus": {
      color: "#fff",
      backgroundColor: "#00915f"
    }
  }
};

class SubmitButton extends Component {
  render() {
    const { buttonText } = this.props;
    return (
      <>
        <Button variant='contained' className={this.props.classes.buttonRoot}>
          {buttonText}
        </Button>
        <Typography align={"center"} style={{ marginTop: 25 }}>
          <Link
            component='button'
            variant='body2'
            onClick={() => {
              console.info("I'm a button.");
            }}
            underline={"always"}
          >
            Lost password?
          </Link>
        </Typography>
        <Typography align={"center"} style={{ marginTop: 25 }}>
          Don't have account?{" "}
          <Link
            component='button'
            variant='body2'
            onClick={() => {
              console.info("I'm a button.");
            }}
            underline={"always"}
          >
            Sign Up
          </Link>
        </Typography>
      </>
    );
  }
}

export default withStyles(styles)(SubmitButton);
