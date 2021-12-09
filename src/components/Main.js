import React, { useState } from "react";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import NavBar from "./NavBar";
import Cart from "./Cart";
import { Backdrop, Paper, Grid } from "@mui/material";

export default function Main({ setDarkMode, darkMode }) {
  const [cartItems, setCartItems] = useState(0);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const showSidebar = () => setSidebarToggle(!sidebarToggle);

  const increment = () => {
    setCartItems(cartItems + 1);
  };
  const decrement = () => {
    setCartItems(cartItems != 0 ? cartItems - 1 : 0);
  };

  return (
    <Grid className="App">
      {" "}
      <NavBar
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        cartItems={cartItems}
        setCartItems={setCartItems}
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        showSidebar={showSidebar}
      />
      <Grid className="body-main">
        <BodyLeft />
        <BodyRight
          cartItems={cartItems}
          setCartItems={setCartItems}
          increment={increment}
          decrement={decrement}
        />
      </Grid>
    </Grid>
  );
}
