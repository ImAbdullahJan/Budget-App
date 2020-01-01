import React from "react";

import { withStyles } from "@material-ui/core";

import { NavBar } from "components";

const styles = theme => ({});

function ImportsPage({ classes }) {
  return (
    <>
      <NavBar />

      <h1>Imports Page</h1>
    </>
  );
}

export default withStyles(styles)(ImportsPage);
