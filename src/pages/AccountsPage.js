import React from "react";

import { Box, Grid, Paper, Typography } from "@material-ui/core";

import { Add, CasinoOutlined } from "@material-ui/icons";

import { NavBar, Button, InputSearch, InputSelect } from "components";

const sorting = [
  {
    value: "10",
    label: "Default"
  },
  {
    value: "20",
    label: "A-Z"
  },
  {
    value: "30",
    label: "Z-A"
  },
  {
    value: "40",
    label: "Balance (Lowest first)"
  },
  {
    value: "50",
    label: "Balance (Highest first)"
  }
];

const accounts = [
  {
    id: 0,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#00897B",
    name: "Account 1",
    type: "Cash",
    balance: "PKR 100.00"
  },
  {
    id: 1,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#4DB6AC",
    name: "Account 2",
    type: "General",
    balance: "PKR 1,000.00"
  },
  {
    id: 2,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#64DD17",
    name: "Account 3",
    type: "Bank Account",
    balance: "PKR 10,000.00"
  },
  {
    id: 3,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#FFB300",
    name: "Account 4",
    type: "Credit Card",
    balance: "PKR 100,000.00"
  },
  {
    id: 4,
    icon: <CasinoOutlined style={{ fontSize: "45px" }} />,
    bgcolor: "#64B5F6",
    name: "Account 5",
    type: "Account with Overdraft",
    balance: "PKR 1,000,000.00"
  }
];

function AccountsPage() {
  return (
    <>
      <NavBar />
      <Box bgcolor='#EFF0F2' p={2} height='87vh'>
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
              <InputSelect options={sorting} />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Box p={5} bgcolor='#FAFBFC' height='70vh' borderRadius={5}>
              <Typography variant='h5' gutterBottom>
                <Box fontWeight='fontWeightMedium' mb={3}>
                  Accounts
                </Box>
              </Typography>

              <Button
                text='Add'
                icon={<Add fontSize='large' />}
                fullWidth
                color='#00aa70'
                hover='#00915f'
              />

              <Box bgcolor='#ffffff'>
                <InputSearch />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            {accounts.map(item => (
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
                          {item.balance}
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
