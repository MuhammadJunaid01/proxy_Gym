import React from "react";
import { MuiNavbar, NavItem } from "mui-navbar";
import logo from "../../images/logo.png";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import UseFirebase from "./../../hooks/useFirebase/UseFirebase";
const Navigation = () => {
  const { user, LogOut } = UseFirebase();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MuiNavbar logo={logo}>
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/classes">Classes</NavItem>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem to="/trainers">Trainers</NavItem>
        <NavItem to="/Blog">Blog</NavItem>
        <NavItem to="/login">Login</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <Box sx={{ display: "inline" }}>
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{}}>
              <Avatar sx={{ padding: "5px" }}>
                <img
                  style={{
                    borderRadius: "50%",
                    height: "70px",
                    width: "70px",
                    marginTop: "15px",
                  }}
                  src={user?.photoURL}
                ></img>
                {/* {user?.photoURL} */}
              </Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",

              "& .MuiAvatar-root": {
                width: 32,

                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: " inline",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={LogOut}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </MuiNavbar>
    </div>
  );
};

export default Navigation;
