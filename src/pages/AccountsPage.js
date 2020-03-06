import React, { useState, useEffect, useCallback, lazy, Suspense } from "react";
import _ from "lodash";
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";

import { useAppState } from "../contexts/AccountContext";
import { accountsData } from "../api/fakeData";
import { Box, Grid, Paper, Typography } from "@material-ui/core";

import { Add } from "@material-ui/icons";

import { Button, InputSearch, InputSelect } from "components";
import EditLayoutButton from "../components/EditLayoutButton";

const AddAccountDialog = lazy(() => import("../components/AddAccountDialog"));

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const ReactGridLayout = WidthProvider(GridLayout);

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

const AccountsPageLeftPanel = ({
  setOpenDialog,
  openDialog,
  searchText,
  setSearchText,
  isDraggable,
  isResizable,
  editLayout,
  onEditLayout
}) => {
  return (
    <Box bgcolor='#FAFBFC' height='490px' borderRadius={5} px={3} py={4}>
      <ReactGridLayout
        className='layout'
        cols={12}
        rowHeight={20}
        isDraggable={isDraggable}
        isResizable={isResizable}
        compactType={"vertical"}
        preventCollision={false}
      >
        <Typography
          key={"accounts"}
          data-grid={{ i: "accounts", x: 0, y: 0, w: 12, h: 2 }}
          variant='h5'
          component='div'
        >
          <Box fontWeight='fontWeightBold' mb={3}>
            Accounts
          </Box>
        </Typography>

        <Box
          key={"addAccountButton"}
          data-grid={{ i: "addAccountButton", x: 0, y: 2, w: 12, h: 2 }}
          mb={30}
        >
          <Button
            text='Add'
            icon={<Add fontSize='large' />}
            fullWidth
            color='#00aa70'
            hover='#00915f'
            pb={4}
            onClick={() => setOpenDialog(true)}
          />
        </Box>

        <Box
          key={"inputSearch"}
          data-grid={{ i: "inputSearch", x: 0, y: 5, w: 12, h: 2 }}
        >
          <Box bgcolor='#ffffff'>
            <InputSearch
              value={searchText}
              onChangeValue={value => setSearchText(value)}
            />
          </Box>
        </Box>
      </ReactGridLayout>

      {openDialog && (
        <Suspense fallback={<div>Loading...</div>}>
          <AddAccountDialog
            openDialog={openDialog}
            handleCloseDialog={() => setOpenDialog(false)}
          />
        </Suspense>
      )}

      <EditLayoutButton
        top={10}
        right={10}
        size={"small"}
        editLayout={editLayout}
        onEditLayout={onEditLayout}
      />
    </Box>
  );
};

function AccountsPage({ accounts, fetchAccounts }) {
  const [elementInEditMode, setElementInEditMode] = useState("");

  const handleElementEditing = element => {
    setElementInEditMode(prevState => (prevState === element ? "" : element));
  };

  console.log(elementInEditMode);

  useEffect(() => {
    fetchAccounts();
  }, []);

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
      <Box bgcolor='#EFF0F2' p={2} style={{ height: "inherit" }}>
        <ResponsiveReactGridLayout
          className='layout'
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={40}
          margin={[10, 10]}
          isDraggable={elementInEditMode === "contentArea"}
          isResizable={elementInEditMode === "contentArea"}
          compactType={"vertical"}
          preventCollision={false}
          measureBeforeMount={false}
          useCSSTransforms={true}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            mb={2}
            key='a'
            data-grid={{ i: "a", x: 0, y: 0, w: 12, h: 1 }}
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

          <Box
            key='b'
            data-grid={{ i: "b", x: 0, y: 1, w: 3, h: 10 }}
            component='span'
          >
            <AccountsPageLeftPanel
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
              searchText={searchText}
              setSearchText={setSearchText}
              isDraggable={elementInEditMode === "leftPanel"}
              isResizable={elementInEditMode === "leftPanel"}
              editLayout={elementInEditMode === "leftPanel"}
              onEditLayout={() => handleElementEditing("leftPanel")}
            />
          </Box>

          <Box key='c' data-grid={{ i: "c", x: 3, y: 1, w: 9, h: 10 }}>
            {sortedAccount.map(item => (
              <Box borderRadius={5} mb={2} key={item.id}>
                <Paper style={{ padding: 15 }} elevation={0}>
                  <Grid container alignItems='center'>
                    <Grid item style={{ lineHeight: 0 }}>
                      <Box
                        bgcolor={item.bgcolor.value}
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
                          {item.type.value}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant='body1' component='div'>
                        <Box fontSize={18} fontWeight={500} textAlign='right'>
                          {item.currency.value} {item.balance}
                        </Box>
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            ))}
          </Box>
        </ResponsiveReactGridLayout>
        <EditLayoutButton
          top={10}
          right={10}
          size={"small"}
          editLayout={elementInEditMode === "contentArea"}
          onEditLayout={() => handleElementEditing("contentArea")}
        />
      </Box>
    </>
  );
}

const connect = (ChildComponent, mapStateToProps, mapDispatchToProps) => {
  const Component = props => {
    const [state, dispatch] = useAppState();

    return (
      <ChildComponent
        accounts={mapStateToProps(state)}
        fetchAccounts={() => mapDispatchToProps(dispatch)}
        {...props}
      />
    );
  };

  return Component;
};

export default connect(
  AccountsPage,
  state => state.accounts,
  dispatch => {
    dispatch({
      type: "FETCH_ACCOUNTS",
      payload: accountsData
    });
  }
);
