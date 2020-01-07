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

function InputSelect({ classes, options, value, onChangeValue }) {
  return (
    <>
      <FormControl variant='outlined' classes={classes}>
        <Select
          id='demo-simple-select'
          value={value}
          onChange={event => onChangeValue(event)}
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
              key={option.value || option.id}
              value={option.value || option.id}
            >
              {option.label || option.name}
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
  options: PropTypes.array,
  value: PropTypes.any.isRequired,
  onChangeValue: PropTypes.func.isRequired
};

export default withStyles(styles)(InputSelect);
