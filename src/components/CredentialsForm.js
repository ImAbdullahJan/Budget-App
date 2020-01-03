import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { withStyles, Box } from "@material-ui/core";

const styles = {
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  containerStyles: {
    display: "flex",
    height: "auto",
    width: "60vw"
  },
  leftBoxStyles: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "50%",
    padding: 50
  },
  rightBoxStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
    height: "auto",
    width: "50%",
    padding: 50
  }
};

function CredentialsForm({ prompt, buttonText }) {
  return (
    <form>
      <Box mt={2}>
        <InputField label='Email' />
      </Box>
      <Box mt={2}>
        <InputField label='Password' />
      </Box>
      {prompt}
      <Box mt={3}>
        <Button text={buttonText} fullWidth color='#00aa70' hover='#00915f' />
      </Box>
    </form>
  );
}

export default withStyles(styles)(CredentialsForm);
