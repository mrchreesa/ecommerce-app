import React, { useState } from "react";
import { Button, Typography, Paper, Popper, Fade } from "@mui/material";
import { makeStyles } from "@mui/styles";

import deleteIcon from "../images/icon-delete.svg";
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";

export default function Cart({ cartItems, setCartItems, handleClick }) {
  const cartTotal = cartItems * 125;

  const resetCart = () => {
    setCartItems(0);
  };

  return (
    <Paper className="cart-container" elevation={3}>
      <Typography className="cart-text"> Cart </Typography>
      {cartItems == 0 ? (
        <p className="empty-cart">Shopping Cart Is Empty</p>
      ) : (
        <>
          <div className="cart-content">
            <img className="cart-image" src={product1Thumbnail} alt="sneaker" />
            <div className="cart-info">
              <p>Fall Limited Edition Sneakers</p>
              <p>$125.00 x {cartItems} = </p>
              <h5>${cartTotal}.00</h5>
            </div>
            <Button onClick={resetCart}>
              <img src={deleteIcon} alt="delete" />
            </Button>
          </div>
        </>
      )}{" "}
      <Button
        onClick={cartItems == 0 ? handleClick : ""}
        className="btn-checkout"
      >
        {cartItems == 0 ? "CLOSE" : "Checkout"}
      </Button>
    </Paper>
  );
}
