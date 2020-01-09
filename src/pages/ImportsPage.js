import React, { useState } from "react";

import { withStyles, Box, Grid, Typography } from "@material-ui/core";

import { FileCopy } from "@material-ui/icons";

import { InputSelect, Button } from "components";

const styles = theme => ({});

function ImportsPage({ accounts }) {
  const [selectedItem, setSelectedItem] = useState(accounts[0]);

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
                  Accounts
                </Box>
              </Typography>

              <InputSelect
                options={accounts}
                value={selectedItem.id}
                onChangeValue={item => {
                  console.log(item);
                  setSelectedItem(item);
                }}
                getOptionValue={item => item.id}
                getOptionLabel={item => item.name}
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
                <Box fontWeight='fontWeightBold' mb={4}>
                  Imports
                </Box>
              </Typography>

              <Box bgcolor='#EFF0F2' borderRadius={3} p={2}>
                <Button
                  text='Choose file'
                  fullWidth
                  color='#00aa70'
                  hover='#00915f'
                  pb={2}
                />

                <Typography variant='body2' align='center' component='span'>
                  <Box>or</Box>
                  <Box>drag and drop here</Box>
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <Box
              bgcolor='#ffffff'
              height='490px'
              borderRadius={5}
              display='flex'
              alignItems='center'
            >
              <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}>
                  <Box textAlign='center' pb={4}>
                    <FileCopy style={{ fontSize: 70 }} />
                  </Box>

                  <Typography
                    variant='body2'
                    align='center'
                    component='span'
                    color='textSecondary'
                  >
                    <Box fontWeight='fontWeightMedium' fontSize={16} pb={1}>
                      You have no imports yet.
                    </Box>
                  </Typography>

                  <Typography
                    variant='body2'
                    align='center'
                    component='span'
                    color='textSecondary'
                  >
                    <Box fontWeight='fontWeightRegular' fontSize={15} pb={3}>
                      Once you import, your Records will
                      <br /> appear here.
                    </Box>
                  </Typography>

                  <Button
                    text='Learn how to import'
                    fullWidth
                    color='#00aa70'
                    hover='#00915f'
                    pb={1.5}
                  />
                </Grid>
                <Grid item xs={5}></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default withStyles(styles)(ImportsPage);
