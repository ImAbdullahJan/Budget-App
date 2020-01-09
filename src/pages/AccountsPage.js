import React, { useState } from "react";
import _ from "lodash";

import { Box, Grid, Paper, Typography } from "@material-ui/core";

import { Add } from "@material-ui/icons";

import { Button, InputSearch, InputSelect, AddAccountDialog } from "components";

const sortOptions = [
  {
    value: "DefultASC",
    path: "id",
    order: "asc",
    label: "Default"
  },
  {
    value: "NameASC",
    path: "name",
    order: "asc",
    label: "A-Z"
  },
  {
    value: "NameDESC",
    path: "name",
    order: "desc",
    label: "Z-A"
  },
  {
    value: "BalanceASC",
    path: "balance",
    order: "asc",
    label: "Balance (Lowest first)"
  },
  {
    value: "BalanceDESC",
    path: "balance",
    order: "desc",
    label: "Balance (Highest first)"
  }
];

function AccountsPage({ accounts, onAddAccount }) {
  const [searchText, setSearchText] = useState("");

  const filteredAccount = accounts.filter(
    account =>
      account.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );

  const [sortItem, setSortedItem] = useState(sortOptions[0]);
  const sortedAccount = _.orderBy(
    filteredAccount,
    sortItem.path,
    sortItem.order
  );

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Box bgcolor='#EFF0F2' p={2}>
        <Grid container>
          <Grid item xs={12}>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              mb={2}
            >
              <Typography variant='body1' component='div'>
                <Box fontWeight='normal' mr={3}>
                  Sort by
                </Box>
              </Typography>
              <InputSelect
                options={sortOptions}
                value={sortItem.value}
                onChangeValue={item => setSortedItem(item)}
                getOptionValue={item => item.value}
                getOptionLabel={item => item.label}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              bgcolor='#FAFBFC'
              height='490px'
              borderRadius={5}
              px={3}
              py={4}
            >
              <Typography variant='h5' component='div'>
                <Box fontWeight='fontWeightBold' mb={3}>
                  Accounts
                </Box>
              </Typography>

              <Button
                text='Add'
                icon={<Add fontSize='large' />}
                fullWidth
                color='#00aa70'
                hover='#00915f'
                pb={4}
                onClick={() => setOpenDialog(true)}
              />
              {openDialog && (
                <AddAccountDialog
                  openDialog={openDialog}
                  handleCloseDialog={() => setOpenDialog(false)}
                  onAddAccount={account => onAddAccount(account)}
                />
              )}
              <Box bgcolor='#ffffff'>
                <InputSearch
                  value={searchText}
                  onChangeValue={value => setSearchText(value)}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            {sortedAccount.map(item => (
              <Box borderRadius={5} mb={2} key={item.id}>
                <Paper style={{ padding: 15 }} elevation={0}>
                  <Grid container alignItems='center'>
                    <Grid item style={{ lineHeight: 0 }}>
                      <Box
                        bgcolor={item.bgcolor}
                        color='white'
                        borderRadius={5}
                      >
                        {item.icon}
                      </Box>
                    </Grid>

                    <Grid item xs={3}>
                      <Typography variant='body1' component='div'>
                        <Box fontSize={18} fontWeight={500} pl={2}>
                          {item.name}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography
                        variant='body1'
                        component='div'
                        color='textSecondary'
                      >
                        <Box fontSize={15} fontWeight='fontWeightMedium'>
                          {item.type}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant='body1' component='div'>
                        <Box fontSize={18} fontWeight={500} textAlign='right'>
                          {item.currency} {item.balance}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AccountsPage;
