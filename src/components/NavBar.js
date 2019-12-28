import React from "react";

import { Link as RouterLink } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Box,
  Chip,
  Avatar,
  Menu,
  MenuItem,
  Typography
} from "@material-ui/core";

import {
  AccountBalanceWalletOutlined,
  Add,
  ArrowDropDown,
  StarBorderOutlined,
  SettingsOutlined,
  ExitToApp
} from "@material-ui/icons";

const navMenu = [
  { id: 0, name: "Dashboard", to: "/dashboard" },
  { id: 1, name: "Accounts", to: "/Accounts" },
  { id: 2, name: "Records", to: "/Records" },
  { id: 3, name: "Analytics", to: "/Analytics" },
  { id: 4, name: "Imports", to: "/Imports" },
  { id: 5, name: "Wallet Life", to: "/wallet-life" }
];

const menuList = [
  {
    id: 0,
    name: "Upgrade",
    icon: <StarBorderOutlined fontSize='small' style={{ marginRight: 15 }} />
  },
  {
    id: 1,
    name: "Setting",
    icon: <SettingsOutlined fontSize='small' style={{ marginRight: 15 }} />
  },
  {
    id: 2,
    name: "Log out",
    icon: <ExitToApp fontSize='small' style={{ marginRight: 15 }} />
  }
];

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar color='inherit' display='flex' elevation={0} position='relative'>
        <Toolbar>
          <IconButton>
            <AccountBalanceWalletOutlined style={{ fontSize: 60 }} />
          </IconButton>

          <Box component='nav' ml={3} flexGrow={1}>
            {navMenu.map(menu => (
              <Link
                underline='none'
                color='textSecondary'
                key={menu.id}
                component={RouterLink}
                to={menu.to}
              >
                <Box
                  component='span'
                  fontWeight='fontWeightBold'
                  fontSize={16}
                  mr={3}
                >
                  {menu.name}
                </Box>
              </Link>
            ))}
          </Box>
          <Box component='div'>
            <Chip size='small' icon={<Add />} label='Record' color='primary' />
          </Box>
          <Box
            component='span'
            ml={3}
            display='flex'
            alignItems='center'
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <Avatar>H</Avatar>

            <Link underline='none' color='textSecondary'>
              <Box
                fontWeight='fontWeightBold'
                fontSize={15}
                ml={1}
                color='textSecondary'
              >
                email@gmail.com
              </Box>
            </Link>
            <ArrowDropDown />
          </Box>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            {menuList.map(item => (
              <MenuItem onClick={handleClose} key={item.id}>
                {item.icon}
                <Typography variant='inherit' style={{ marginRight: 45 }}>
                  {item.name}
                </Typography>{" "}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
