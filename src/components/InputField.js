import React from "react";
import PropTypes from "prop-types";

import { withStyles, Box, TextField, InputLabel } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginTop: theme.spacing(1),
    "& .MuiOutlinedInput-input": {
      fontSize: 15
    }
  }
});

function InputField({
  label,
  classes,
  fullWidth,
  placeholder,
  type,
  value,
  onChangeValue
}) {
  return (
    <Box component='span'>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <TextField
        id={label}
        fullWidth={fullWidth}
        placeholder={placeholder}
        type={type}
        size='small'
        variant='outlined'
        className={classes.textField}
        value={value}
        onChange={event => onChangeValue(event.target.value)}
      />
    </Box>
  );
}

InputField.defaultProps = {
  fullWidth: true,
  type: "text"
};

InputField.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object,
  fullWidth: PropTypes.bool.isRequired,
  placeholder: PropTypes.any,
  type: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default withStyles(styles)(InputField);
