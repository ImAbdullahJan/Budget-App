import React from "react";

import {
  withStyles,
  TextField,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

const styles = theme => ({
  root: {
    "& .MuiInputBase-root ": {
      width: 230,
      backgroundColor: "#ffffff"
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "#ffffff"
    }
  }
});

function InputSelect({ classes, options }) {
  const [items, setItems] = React.useState(10);

  const handleChange = event => {
    setItems(event.target.value);
  };
  return (
    <>
      <FormControl variant='outlined' classes={classes}>
        <Select
          id='demo-simple-select'
          value={items}
          onChange={handleChange}
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
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <TextField
        id='outlined-select-items'
        select
        classes={classes}
        value={items}
        onChange={handleChange}
        variant='outlined'
        size='small'
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}
    </>
  );
}

export default withStyles(styles)(InputSelect);
