import React, { useState } from "react";
import { Button } from "@mui/material";
import product1 from "../images/image-product-1.jpg";
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2.jpg";
import product2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3.jpg";
import product3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4.jpg";
import product4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import iconNext from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";

import BackdropComp from "./BackdropComp";

const products = [product1, product2, product3, product4];

export default function BodyLeft() {
  const [selectedProduct, setSelectedProduct] = useState(product1);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const generateProductThumbnails = (src, product) => ({
    src,
    product,
  });

  const productItems = [
    generateProductThumbnails(product1Thumbnail, product1),
    generateProductThumbnails(product2Thumbnail, product2),
    generateProductThumbnails(product3Thumbnail, product3),
    generateProductThumbnails(product4Thumbnail, product4),
  ];

  const next = () => {
    setCurrent(current === products.length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? products.length - 1 : current - 1);
  };

  return (
    <div className="body-left-wrapper">
      <BackdropComp
        openBackdrop={openBackdrop}
        handleToggle={handleToggle}
        handleClose={handleClose}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        next={next}
        prev={prev}
        current={current}
      />
      <div className="product">
        <Button onClick={handleToggle}>
          <img src={selectedProduct} alt="shoes" />
        </Button>
      </div>
      <div className="product-mobile-container">
        <Button className="previous mobile" onClick={prev}>
          <img src={previous} alt="previous" />
        </Button>
        <img className="product-mobile" src={products[current]} alt="shoes" />
        <Button className="next mobile" onClick={next}>
          <img src={iconNext} alt="next" />
        </Button>
      </div>
      <div className="product-btns">
        {productItems.map((item) => (
          <Button
            className="button"
            onClick={() => setSelectedProduct(item.product)}
          >
            <img
              src={item.src}
              alt="dog"
              style={{
                border:
                  selectedProduct == item.product
                    ? "3px solid hsl(26, 100%, 45%)"
                    : "",
                opacity: selectedProduct == item.product ? 0.7 : "",
              }}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
