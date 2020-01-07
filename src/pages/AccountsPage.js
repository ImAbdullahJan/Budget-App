import React, { useState, useEffect } from "react";
import _ from "lodash";

import { sortingArray } from "../api/fakeData";

import { Box, Grid, Paper, Typography } from "@material-ui/core";

import { Add } from "@material-ui/icons";

import { Button, InputSearch, InputSelect, AddAccountDialog } from "components";

function AccountsPage({ accounts, setAccounts }) {
  const handleAddAccount = data => {
    setAccounts([...accounts, data]);
  };

  // Filter Accounts with search field
  const [searchText, setSearchText] = useState("");

  const handleSearchText = event => {
    setSearchText(event.target.value);
  };

  const filteredAccount = accounts.filter(
    account =>
      account.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );

  // Sorting Select field logic

  const [selectedItem, setSelectedItem] = useState("10");

  const handleUpdateSorting = event => {
    setSelectedItem(event.target.value);
  };

  const sortItem = sortingArray.find(item => item.value === selectedItem);
  const [sortColumn, setSortColumn] = useState(sortItem.path);
  const [sortOrder, setSortOrder] = useState(sortItem.order);

  useEffect(() => {
    setSortColumn(sortItem.path);
    setSortOrder(sortItem.order);
  }, [sortItem]);

  const sortedAccount = _.orderBy(filteredAccount, sortColumn, sortOrder);

  // Add Account Dialog box logic
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Filter Accounts Logic

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
                options={sortingArray}
                value={selectedItem}
                onChangeValue={handleUpdateSorting}
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
                onClick={handleOpenDialog}
              />
              {openDialog && (
                <AddAccountDialog
                  openDialog={openDialog}
                  handleCloseDialog={handleCloseDialog}
                  onAddAccount={handleAddAccount}
                />
              )}
              <Box bgcolor='#ffffff'>
                <InputSearch
                  value={searchText}
                  onChangeValue={handleSearchText}
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
