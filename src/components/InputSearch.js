import React from "react";
import PropTypes from "prop-types";

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

function InputSearch({ classes, value, onChangeValue }) {
  return (
    <OutlinedInput
      margin='dense'
      placeholder='Search'
      value={value}
      onChange={event => onChangeValue(event)}
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

InputSearch.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.any.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default withStyles(styles)(InputSearch);
