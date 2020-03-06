import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

import { Edit as EditIcon, Save as SaveIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    top: props => props.top,
    bottom: props => props.bottom,
    right: props => props.right,
    left: props => props.left
  }
}));

export default function EditLayoutButton(props) {
  const classes = useStyles(props);
  const { editLayout, onEditLayout, size } = props;

  const [buttonColor, setButtonColor] = useState("secondary");

  useEffect(() => {
    setButtonColor(!editLayout ? "secondary" : "primary");
  }, [editLayout]);

  return (
    <div className={classes.root}>
      <Fab
        size={size}
        color={buttonColor}
        aria-label='edit'
        onClick={onEditLayout}
      >
        {!editLayout ? <EditIcon /> : <SaveIcon />}
      </Fab>
    </div>
  );
}
