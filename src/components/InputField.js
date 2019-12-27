import React from "react";

import { withStyles, TextField, InputLabel } from "@material-ui/core";

const styles = {
  inputLable: {
    marginTop: 18
  },
  textField: {
    marginTop: 9
  }
};

function InputField({ label, classes }) {
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

export default withStyles(styles)(InputField);
