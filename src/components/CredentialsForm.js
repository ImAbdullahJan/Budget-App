import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import { withStyles } from "@material-ui/core/styles";

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
      <InputField label='Email' />
      <InputField label='Password' />
      {prompt}
      <div style={{ marginTop: 25 }}>
        <Button text={buttonText} fullWidth color='#00aa70' hover='#00915f' />
      </div>
    </form>
  );
}

export default withStyles(styles)(CredentialsForm);
