import React from "react";

import { Checkbox, Typography, Link } from "@material-ui/core";

const PrivacyPolicy = () => {
  return (
    <div style={{ display: "flex", marginBottom: 30 }}>
      <Checkbox
        style={{ alignSelf: "flex-start" }}
        value='uncontrolled'
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
      <Typography variant={"body2"} style={{ paddingTop: 10, fontWeight: 500 }}>
        I've reviewed and agree to the{" "}
        <Link underline={"always"} style={{ cursor: "pointer" }}>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link underline={"always"} style={{ cursor: "pointer" }}>
          Terms of Service
        </Link>{" "}
        regarding the consent for the use of my personal data.
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
