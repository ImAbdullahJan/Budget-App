import React from "react";

import { withStyles } from "@material-ui/core";

import { NavBar } from "components";

const styles = theme => ({});

function RecordsPage({ classes }) {
  return (
    <>
      <NavBar />

      <h1>Records Page</h1>
    </>
  );
}

export default withStyles(styles)(RecordsPage);
