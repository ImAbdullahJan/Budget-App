import React from "react";

import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    marginBottom: 20,
    borderRadius: 27,
    color: "#fff",
    backgroundColor: props => props.color,
    textTransform: "capitalize",
    "&:hover": {
      color: "#fff",
      backgroundColor: props => props.hover
    },
    "&:active": {
      color: "#fff",
      backgroundColor: props => props.hover
    },
    "&:focus": {
      color: "#fff",
      backgroundColor: props => props.hover
    }
  }
};

function Button({ fullWidth, icon, classes, text }) {
  return (
    <MuiButton
      fullWidth={fullWidth}
      variant='contained'
      size='large'
      startIcon={icon}
      classes={classes}
    >
      {text}
    </MuiButton>
  );
}

export default withStyles(styles)(Button);
