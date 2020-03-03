import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";

import RGL, { WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

import { useAppState } from "../contexts/AccountContext";

import {
  withStyles,
  Box,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

import {
  Close as CloseIcon,
  CasinoOutlined,
  Edit as EditIcon,
  Save as SaveIcon,
  NewReleases,
  FlipToFront,
  Dashboard as DashboardIcon
} from "@material-ui/icons";

import { InputField, InputSelect, Button } from "components";

const ReactGridLayout = WidthProvider(RGL);

const accountType = [
  {
    value: "Cash",
    label: "Cash"
  },
  {
    value: "General",
    label: "General"
  },
  {
    value: "Bank Account",
    label: "Bank Account"
  },
  {
    value: "Credit Card",
    label: "Credit Card"
  },
  {
    value: "Account with Overdraft",
    label: "Account with Overdraft"
  }
];

const SelectColors = [
  {
    value: "#f44336",
    label: "Red"
  },
  {
    value: "#e91e63",
    label: "Pink"
  },
  {
    value: "#9c27b0",
    label: "Purple"
  },
  {
    value: "#2196f3",
    label: "Blue"
  },
  {
    value: "#4caf50",
    label: "Green"
  },
  {
    value: "#ffeb3b",
    label: "Yellow"
  },
  {
    value: "#ff9800",
    label: "Orange"
  },
  {
    value: "#9e9e9e",
    label: "Grey"
  }
];

const SelectCurrency = [
  {
    value: "PKR",
    label: "PKR"
  },
  {
    value: "$",
    label: "DOLLAR"
  }
];

const styles = theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#9e9e9e"
  },
  editButton: {
    position: "absolute",
    right: theme.spacing(7),
    top: theme.spacing(1),
    color: "#9e9e9e"
  },
  newLayoutButton: {
    position: "absolute",
    right: theme.spacing(14),
    top: theme.spacing(1),
    color: "#9e9e9e"
  },
  anotherLayoutButton: {
    position: "absolute",
    right: theme.spacing(21),
    top: theme.spacing(1),
    color: "#9e9e9e"
  },
  defaultLayoutButton: {
    position: "absolute",
    right: theme.spacing(28),
    top: theme.spacing(1),
    color: "#9e9e9e"
  }
});

const initilaLayout = [
  { i: "a1", x: 0, y: 0, w: 8, h: 2 },
  { i: "b1", x: 8, y: 0, w: 4, h: 2 },
  { i: "c1", x: 0, y: 2, w: 12, h: 2 },
  { i: "d1", x: 0, y: 4, w: 8, h: 2 },
  { i: "e1", x: 8, y: 4, w: 4, h: 2 },
  { i: "f1", x: 0, y: 6, w: 12, h: 2 },
  { i: "g1", x: 0, y: 7, w: 12, h: 2 }
];

function AddAccountDialog({ classes, openDialog, handleCloseDialog }) {
  const [, dispatch] = useAppState();

  const [mounted, setMounted] = useState(false);
  const [isDragable, setIsDragable] = useState(false);
  const [isResizable, setIsResizable] = useState(false);
  const [editGrid, setEditGrid] = useState(false);
  const [gridLayout, setGridLayout] = useState(initilaLayout);

  useEffect(() => {
    if (editGrid) {
      setIsDragable(true);
      setIsResizable(true);
    } else {
      setIsDragable(false);
      setIsResizable(false);
    }

    return () => {
      setIsDragable(false);
      setIsResizable(false);
    };
  }, [editGrid]);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const handleNewVersion = () => {
    setGridLayout([
      { i: "a1", x: 0, y: 0, w: 8, h: 2 },
      { i: "b1", x: 0, y: 2, w: 4, h: 2 },
      { i: "c1", x: 0, y: 4, w: 12, h: 2 },
      { i: "d1", x: 4, y: 2, w: 4, h: 2 },
      { i: "e1", x: 8, y: 2, w: 4, h: 2 },
      { i: "f1", x: 8, y: 0, w: 4, h: 2 },
      { i: "g1", x: 0, y: 6, w: 12, h: 2 }
    ]);
  };

  const handleAnotherVersion = () => {
    setGridLayout([
      { i: "a1", x: 0, y: 2, w: 8, h: 2 },
      { i: "b1", x: 8, y: 6, w: 4, h: 2 },
      { i: "c1", x: 0, y: 4, w: 12, h: 2 },
      { i: "d1", x: 0, y: 6, w: 4, h: 2 },
      { i: "e1", x: 4, y: 6, w: 4, h: 2 },
      { i: "f1", x: 8, y: 2, w: 4, h: 2 },
      { i: "g1", x: 0, y: 0, w: 12, h: 2 }
    ]);
  };

  const handleDefaultLayout = () => {
    setGridLayout(initilaLayout);
  };

  const onLayoutChange = layout => {
    console.log(layout);
    setGridLayout(layout);
  };

  const [state, setState] = useState({
    id: "",
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: { value: "#f44336", label: "Red" },
    name: "",
    type: { value: "Cash", label: "Cash" },
    currency: { value: "PKR", label: "PKR" },
    balance: ""
  });

  const handleChange = prop => value => {
    setState({ ...state, id: uuidv4(), [prop]: value });
  };

  const handleSave = data => {
    dispatch({
      type: "ADD_ACCOUNT",
      payload: data
    });

    handleCloseDialog();
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Box bgcolor='#FAFBFC' width={500}>
        <DialogTitle id='alert-dialog-title'>
          <Typography variant='subtitle1' component='div'>
            <Box fontWeight='fontWeightMedium' fontSize={18}>
              ADD ACCOUNT
            </Box>
          </Typography>
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            aria-label='close'
            className={classes.editButton}
            onClick={() => setEditGrid(!editGrid)}
          >
            {editGrid ? <SaveIcon /> : <EditIcon />}
          </IconButton>
          <IconButton
            aria-label='close'
            className={classes.newLayoutButton}
            onClick={handleNewVersion}
          >
            <NewReleases />
          </IconButton>
          <IconButton
            aria-label='close'
            className={classes.anotherLayoutButton}
            onClick={handleAnotherVersion}
          >
            <FlipToFront />
          </IconButton>
          <IconButton
            aria-label='close'
            className={classes.defaultLayoutButton}
            onClick={handleDefaultLayout}
          >
            <DashboardIcon />
          </IconButton>
        </DialogTitle>
      </Box>

      <DialogContent dividers>
        <Box mt={1}>
          <ReactGridLayout
            className='layout'
            cols={12}
            rowHeight={30}
            layout={gridLayout}
            onLayoutChange={onLayoutChange}
            isDraggable={isDragable}
            isResizable={isResizable}
            measureBeforeMount={false}
            useCSSTransforms={mounted}
          >
            <Box key='a1'>
              <InputField
                label='Name'
                placeholder='Account Name'
                value={state.name}
                onChangeValue={handleChange("name")}
              />
            </Box>

            <Box key='b1'>
              <Typography
                variant='body1'
                component='span'
                color='textSecondary'
              >
                <Box mb={1} lineHeight={1}>
                  Color
                </Box>
              </Typography>
              <InputSelect
                options={SelectColors}
                width={120}
                value={state.bgcolor.value}
                onChangeValue={handleChange("bgcolor")}
                getOptionValue={item => item.value}
                getOptionLabel={item => item.label}
              />
            </Box>

            <Box key='c1'>
              <Typography variant='body1' component='div' color='textSecondary'>
                <Box mb={1} lineHeight={1}>
                  Account Type
                </Box>
              </Typography>
              <InputSelect
                options={accountType}
                width={420}
                value={state.type.value}
                onChangeValue={handleChange("type")}
                getOptionValue={item => item.value}
                getOptionLabel={item => item.label}
              />
            </Box>

            <Box key='d1'>
              <InputField
                label='Starting Amount'
                placeholder='0.00'
                value={state.balance}
                onChangeValue={handleChange("balance")}
              />
            </Box>

            <Box key='e1'>
              <Typography
                variant='body1'
                component='span'
                color='textSecondary'
              >
                <Box mb={1} lineHeight={1}>
                  Currency
                </Box>
              </Typography>
              <InputSelect
                options={SelectCurrency}
                width={120}
                value={state.currency.value}
                onChangeValue={handleChange("currency")}
                getOptionValue={item => item.value}
                getOptionLabel={item => item.label}
              />
            </Box>

            <Box key='f1'>
              <FormControlLabel
                value='end'
                control={<Switch color='primary' />}
                label='Exclude from statistics'
                labelPlacement='end'
              />
            </Box>
            <Box key='g1'>
              <Button
                text='Save'
                fullWidth
                color='#00aa70'
                hover='#00915f'
                pb={4}
                onClick={() => handleSave(state)}
              />
            </Box>
          </ReactGridLayout>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(AddAccountDialog);
