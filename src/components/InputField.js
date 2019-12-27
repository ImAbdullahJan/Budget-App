import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
  inputLable: {
    marginTop: 18
  },
  textField: {
    marginTop: 9
  }
};

class InputField extends Component {
  render() {
    const { label, classes } = this.props;
    return (
      <>
        <InputLabel className={classes.inputLable} htmlFor={label}>
          {label}
        </InputLabel>
        <TextField
          id={label}
          fullWidth
          size='small'
          variant='outlined'
          className={classes.textField}
        />
      </>
    );
  }
}

export default withStyles(styles)(InputField);
