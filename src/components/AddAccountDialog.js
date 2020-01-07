import React from "react";
import uuidv4 from "uuid/v4";
import { accountType, SelectColors, SelectCurrency } from "../api/fakeData";

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

import { Close as CloseIcon, CasinoOutlined } from "@material-ui/icons";

import { InputField, InputSelect, Button } from "components";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#9e9e9e"
  }
});

function AddAccountDialog({
  classes,
  openDialog,
  handleCloseDialog,
  onAddAccount
}) {
  const [state, setState] = React.useState({
    id: "",
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#f44336",
    name: "",
    type: "Cash",
    currency: "PKR",
    balance: ""
  });

  const handleChange = prop => event => {
    setState({ ...state, id: uuidv4(), [prop]: event.target.value });
  };

  const handleSave = data => {
    onAddAccount(data);
    setState({
      id: "",
      icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
      bgcolor: "#f44336",
      name: "",
      type: "Cash",
      currency: "PKR",
      balance: ""
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
      <Box bgcolor='#FAFBFC'>
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
        </DialogTitle>
      </Box>

      <DialogContent dividers>
        <Box mt={1} px={3}>
          <Box my={2} display='flex'>
            <Box flexGrow={1}>
              <InputField
                label='Name'
                placeholder='Account Name'
                value={state.name}
                onChangeValue={handleChange("name")}
              />
            </Box>
            <Box ml={2}>
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
                width={100}
                value={state.bgcolor}
                onChangeValue={handleChange("bgcolor")}
              />
            </Box>
          </Box>

          <Box my={2}>
            <Typography variant='body1' component='div' color='textSecondary'>
              <Box mb={1} lineHeight={1}>
                Account Type
              </Box>
            </Typography>
            <InputSelect
              options={accountType}
              width={400}
              value={state.type}
              onChangeValue={handleChange("type")}
            />
          </Box>

          <Box my={2} display='flex'>
            <Box flexGrow={1}>
              <InputField
                label='Starting Amount'
                placeholder='0.00'
                value={state.balance}
                onChangeValue={handleChange("balance")}
              />
            </Box>
            <Box ml={2}>
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
                width={100}
                value={state.currency}
                onChangeValue={handleChange("currency")}
              />
            </Box>
          </Box>

          <Box my={2}>
            <FormControlLabel
              value='end'
              control={<Switch color='primary' />}
              label='Exclude from statistics'
              labelPlacement='end'
            />
          </Box>

          <Box my={2}>
            <Button
              text='Save'
              fullWidth
              color='#00aa70'
              hover='#00915f'
              pb={4}
              onClick={() => handleSave(state)}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(AddAccountDialog);
