import React from "react";

import { withStyles } from "@material-ui/core";

import { NavBar } from "components";

const styles = theme => ({});

function AnalyticsPage({ classes }) {
  return (
    <>
      <NavBar />

      <h1>Analytics Page</h1>
    </>
  );
}

export default withStyles(styles)(AnalyticsPage);
