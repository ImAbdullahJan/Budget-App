import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";

import { Edit as EditIcon, Save as SaveIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: 20,
    right: 20
  }
}));

export default function FloatingActionButtons({ editLayout, onEditLayout }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color='secondary' aria-label='edit' onClick={onEditLayout}>
        {!editLayout ? <EditIcon /> : <SaveIcon />}
      </Fab>
    </div>
  );
}
