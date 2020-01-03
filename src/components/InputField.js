import React from "react";

import { withStyles, Box, TextField, InputLabel } from "@material-ui/core";

const styles = {
  textField: {
    marginTop: 8,
    "& .MuiOutlinedInput-input": {
      fontSize: 15
    }
  }
};

function InputField({ label, classes, fullWidth, placeholder }) {
  return (
    <Box component='span'>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <TextField
        id={label}
        fullWidth={fullWidth}
        placeholder={placeholder}
        size='small'
        variant='outlined'
        className={classes.textField}
      />
    </Box>
  );
}

InputField.defaultProps = {
  fullWidth: true
};

export default withStyles(styles)(InputField);
