import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Link } from "@material-ui/core";

const LinkText = ({ onClick, text, linkText, to }) => (
  <Typography align='center' style={{ marginTop: 15 }}>
    {text}
    <Link
      variant='body2'
      onClick={onClick}
      underline='always'
      style={{ marginLeft: 5 }}
      component={RouterLink}
      to={`/${to}`}
    >
      {linkText}
    </Link>
  </Typography>
);

export default LinkText;
