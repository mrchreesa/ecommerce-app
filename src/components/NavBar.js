import React, { useState } from "react";
import {
  Badge,
  Button,
  Typography,
  IconButton,
  Popper,
  Fade,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import Cart from "./Cart";

import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import cart from "../images/icon-cart.svg";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#3b424d",
    // },
    secondary: {
      // This is green.A700 as hex.
      main: "#ff7d1a",
    },
  },
});

export default function NavBar({
  cartItems,
  setCartItems,
  sidebarToggle,
  setSidebarToggle,
  showSidebar,
  setDarkMode,
  darkMode,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const open = Boolean(anchorEl);
  const id = open ? "transitions-popper" : undefined;
  return (
    <div className="navbar-wrapper">
      <div
        onClick={showSidebar}
        className={sidebarToggle ? "burger" : "burger toggle"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ThemeProvider theme={theme}>
        <div className="navbar-logo">
          <img
            className={darkMode ? "navbar-img-light" : "navbar-img-dark"}
            src={logo}
            alt="navbar logo"
          />
        </div>
        <div
          className={sidebarToggle ? "navbar-menu" : "navbar-menu nav-active"}
          id={darkMode ? "navbar-link-light" : "navbar-link-dark"}
        >
          <a
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Collections
          </a>
          <a
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Men
          </a>
          <a
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Women
          </a>
          <a
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            About
          </a>
          <a
            className={darkMode ? "navbar-link-light" : "navbar-link-dark"}
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="navbar-empty-div"></div>
        <Button style={{ marginRight: 10 }} onClick={toggleDarkMode}>
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
        <IconButton
          className="navbar-cart"
          aria-describedby={id}
          onClick={handleClick}
        >
          <Badge badgeContent={cartItems} color="secondary">
            <img src={cart} alt="cart" />
          </Badge>
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div>
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleClick={handleClick}
                />
              </div>
            </Fade>
          )}
        </Popper>
      </ThemeProvider>
      <div className="navbar-profile">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
