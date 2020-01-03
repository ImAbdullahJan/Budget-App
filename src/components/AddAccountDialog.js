import React from "react";

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

import CloseIcon from "@material-ui/icons/Close";

import { InputField, InputSelect, Button } from "components";

const accountType = [
  {
    value: "10",
    label: "Cash"
  },
  {
    value: "20",
    label: "General"
  },
  {
    value: "30",
    label: "Bank Account"
  },
  {
    value: "40",
    label: "Credit Card"
  },
  {
    value: "50",
    label: "Account with Overdraft"
  }
];

const SelectColors = [
  {
    value: "10",
    label: "Red"
  },
  {
    value: "20",
    label: "Blue"
  },
  {
    value: "30",
    label: "Green"
  },
  {
    value: "40",
    label: "Orange"
  },
  {
    value: "50",
    label: "Black"
  }
];

const SelectCurrency = [
  {
    value: "10",
    label: "PKR"
  },
  {
    value: "20",
    label: "DOLLAR"
  }
];

const styles = theme => ({
  closeButton: {
    position: "absolute",
    right: 8,
    top: 8,
    color: "#9e9e9e"
  }
});

function AddAccountDialog({ classes, openDialog, handleCloseDialog }) {
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
              <InputField label='Name' placeholder='Account Name' />
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
              <InputSelect options={SelectColors} width={100} />
            </Box>
          </Box>

          <Box my={2}>
            <Typography variant='body1' component='div' color='textSecondary'>
              <Box mb={1} lineHeight={1}>
                Account Type
              </Box>
            </Typography>
            <InputSelect options={accountType} width={400} />
          </Box>

          <Box my={2} display='flex'>
            <Box flexGrow={1}>
              <InputField label='Starting Amount' placeholder='0' />
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
              <InputSelect options={SelectCurrency} width={100} />
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
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default withStyles(styles)(AddAccountDialog);
