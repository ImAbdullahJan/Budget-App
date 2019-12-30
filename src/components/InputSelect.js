import React from "react";

import { withStyles, TextField, MenuItem } from "@material-ui/core";

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
  const [currency, setCurrency] = React.useState(10);

  const handleChange = event => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <TextField
        id='outlined-select-currency'
        select
        classes={classes}
        value={currency}
        onChange={handleChange}
        variant='outlined'
        size='small'
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}

export default withStyles(styles)(InputSelect);
