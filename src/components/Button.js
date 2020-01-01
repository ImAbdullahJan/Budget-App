import React from "react";

import { withStyles, Box, Button as MuiButton } from "@material-ui/core";

const styles = {
  root: {
    borderRadius: 27,
    color: "#fff",
    backgroundColor: props => props.color,
    textTransform: "capitalize",
    "&:hover, &:active, &:focus": {
      color: "#fff",
      backgroundColor: props => props.hover
    }
  }
};

function Button({ fullWidth, icon, classes, text, pb }) {
  return (
    <Box pb={pb}>
      <MuiButton
        fullWidth={fullWidth}
        variant='contained'
        startIcon={icon}
        classes={classes}
      >
        {text}
      </MuiButton>
    </Box>
  );
}

Button.defaultProps = {
  pb: 3
};

export default withStyles(styles)(Button);
