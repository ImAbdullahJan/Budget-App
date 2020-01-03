import React from "react";

import { withStyles, InputAdornment, OutlinedInput } from "@material-ui/core";

import { Search } from "@material-ui/icons";

const styles = theme => ({
  root: {
    "& $notchedOutline": {
      borderWidth: 0
    },
    "&:hover $notchedOutline": {
      borderWidth: 0
    },
    "&$focused $notchedOutline": {
      borderWidth: 1,
      borderColor: "blue"
    },
    color: "#9A9FA8"
  },
  focused: {},
  notchedOutline: {}
});

function InputSearch({ classes }) {
  return (
    <OutlinedInput
      margin='dense'
      placeholder='Search'
      fullWidth
      classes={classes}
      startAdornment={
        <InputAdornment position='start'>
          <Search />
        </InputAdornment>
      }
    />
  );
}

export default withStyles(styles)(InputSearch);
