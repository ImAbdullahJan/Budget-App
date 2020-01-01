import React from "react";

import { withStyles } from "@material-ui/core";

import { NavBar } from "components";

const styles = theme => ({});

function DashboardPage({ classes }) {
  return (
    <>
      <NavBar />

      <h1>Dashboard Page</h1>
    </>
  );
}

export default withStyles(styles)(DashboardPage);
