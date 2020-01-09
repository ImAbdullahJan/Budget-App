import React from "react";

import {
  withStyles,
  Box,
  Typography,
  Button as MuiButton
} from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 450;

const styles = theme => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    top: "25%",
    bottom: 0,
    height: "75%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

function TestPage({ classes }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>Test Page</h1>

      <MuiButton
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}
      >
        Open Left
      </MuiButton>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        {[...Array(30).keys()].map(item => (
          <Typography key={item} variant='body1' component='div'>
            <Box fontWeight='normal'>Some Text</Box>
          </Typography>
        ))}
      </Drawer>
    </>
  );
}

export default withStyles(styles)(TestPage);
