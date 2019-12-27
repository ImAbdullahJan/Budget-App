import React, { Component } from "react";

import { Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import BlockIcon from "@material-ui/icons/Block";

import { withStyles } from "@material-ui/core/styles";

const colors = {
  facebook: {
    text: "Continue with Facebook",
    color: "#304D8A",
    hover: "#2d4373"
  },
  google: { text: "Continue with Google", color: "#2A75F3", hover: "#0062cc" }
};

const styles = {
  root: {
    marginBottom: 20,
    borderRadius: 27,
    color: "#fff",
    backgroundColor: props =>
      `${props.facebook ? colors.facebook.color : colors.google.color}`,
    textTransform: "capitalize",
    "&:hover": {
      color: "#fff",
      backgroundColor: props =>
        `${props.facebook ? colors.facebook.hover : colors.google.hover}`
    },
    "&:active": {
      color: "#fff",
      backgroundColor: props =>
        `${props.facebook ? colors.facebook.hover : colors.google.hover}`
    },
    "&:focus": {
      color: "#fff",
      backgroundColor: props =>
        `${props.facebook ? colors.facebook.hover : colors.google.hover}`
    }
  }
};

class SocialLogin extends Component {
  renderIcon = () => {
    return this.props.facebook ? (
      <FacebookIcon fontSize='large' />
    ) : (
      <BlockIcon fontSize='large' />
    );
  };
  render() {
    return (
      <>
        <Button
          variant='contained'
          size='large'
          startIcon={this.renderIcon()}
          classes={this.props.classes}
        >
          {this.props.facebook ? colors.facebook.text : colors.google.text}
        </Button>
      </>
    );
  }
}

export default withStyles(styles)(SocialLogin);
