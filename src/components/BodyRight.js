import React, { useState } from "react";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import Cart from "./Cart";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import cart from "../images/icon-cart.svg";

export default function BodyRight({
  cartItems,
  setCartItems,
  increment,
  decrement,
}) {
  return (
    <div className="body-right-wrapper">
      <div className="content">
        <h5>SNEAKER COMPANY</h5>
        <h1> Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <h2> $125.00</h2>
          <h4 className="discount"> 50%</h4>
        </div>
        <small> $250.00</small>
      </div>
      <div className="body-right-buttons">
        <ButtonGroup
          className="btn-right-group"
          style={{ borderRadius: "50%" }}
        >
          <Button
            className="btn-inc"
            onClick={decrement}
            style={{
              border: 0,

              backgroundColor: " hsl(223, 64%, 93%)",
            }}
          >
            <img src={minus} alt="plus" />
          </Button>
          <Typography
            className="numbers"
            style={{
              border: 0,
              padding: "20px 10px",
              backgroundColor: " hsl(223, 64%, 93%)",
            }}
          >
            {cartItems}
          </Typography>
          <Button
            className="btn-inc"
            onClick={increment}
            style={{
              border: 0,
              backgroundColor: " hsl(223, 64%, 93%)",
            }}
          >
            <img src={plus} alt="plus" />
          </Button>
        </ButtonGroup>{" "}
        <Button className="btn-add" onClick={increment}>
          <img src={cart} alt="" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}
