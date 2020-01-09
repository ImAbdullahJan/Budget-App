import React from "react";
import PropTypes from "prop-types";

import { withStyles, MenuItem, FormControl, Select } from "@material-ui/core";

const styles = theme => ({
  root: {
    "& .MuiInputBase-root ": {
      width: props => props.width,
      fontSize: 14,
      backgroundColor: "#ffffff"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "#ffffff"
    }
  }
});

function InputSelect({
  classes,
  options,
  value,
  onChangeValue,
  getOptionValue,
  getOptionLabel
}) {
  return (
    <>
      <FormControl variant='outlined' classes={classes}>
        <Select
          id='demo-simple-select'
          value={value}
          onChange={e => {
            onChangeValue(
              options.find(item => getOptionValue(item) === e.target.value)
            );
          }}
          margin='dense'
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            getContentAnchorEl: null
          }}
        >
          {options.map(option => (
            <MenuItem
              key={getOptionValue(option)}
              value={getOptionValue(option)}
            >
              {getOptionLabel(option)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

InputSelect.defaultProps = {
  width: 200
};

InputSelect.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  getOptionValue: PropTypes.func.isRequired,
  getOptionLabel: PropTypes.func.isRequired
};

export default withStyles(styles)(InputSelect);
