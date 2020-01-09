import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import {
  withStyles,
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
  { id: 1, name: "Accounts", to: "/accounts" },
  { id: 2, name: "Records", to: "/records" },
  { id: 3, name: "Analytics", to: "/analytics" },
  { id: 4, name: "Imports", to: "/imports" },
  { id: 5, name: "Test", to: "/test" }
];

const menuList = [
  {
    id: 0,
    name: "Upgrade",
    icon: (
      <StarBorderOutlined
        color='primary'
        fontSize='small'
        style={{ marginRight: 15 }}
      />
    )
  },
  {
    id: 1,
    name: "Setting",
    icon: (
      <SettingsOutlined
        color='primary'
        fontSize='small'
        style={{ marginRight: 15 }}
      />
    )
  },
  {
    id: 2,
    name: "Log out",
    icon: (
      <ExitToApp color='primary' fontSize='small' style={{ marginRight: 15 }} />
    )
  }
];

const styles = {
  root: {
    "&.active, &:hover": {
      fontWeight: "700"
    }
  }
};

function NavBar({ classes }) {
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
            <AccountBalanceWalletOutlined style={{ fontSize: 50 }} />
          </IconButton>

          <Box component='nav' ml={3} flexGrow={1}>
            {navMenu.map(menu => (
              <Link
                underline='none'
                color='textSecondary'
                key={menu.id}
                component={RouterLink}
                to={menu.to}
                classes={classes}
              >
                <Box component='span' fontSize={16} mr={3}>
                  {menu.name}
                </Box>
              </Link>
            ))}
          </Box>
          <Box component='div'>
            <Chip
              size='small'
              icon={<Add style={{ color: "#ffffff" }} />}
              label='Record'
              style={{ backgroundColor: "#006EE6", color: "#ffffff" }}
            />
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

            <Link underline='none' color='textPrimary'>
              <Box fontWeight='fontWeightBold' fontSize={15} ml={1}>
                example@gmail.com
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

export default withStyles(styles)(NavBar);
