import React, { useState } from "react";
import { Button, Backdrop } from "@mui/material";
import close from "../images/icon-close.svg";
import iconNext from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import product1 from "../images/image-product-1.jpg";
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import product2 from "../images/image-product-2.jpg";
import product2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import product3 from "../images/image-product-3.jpg";
import product3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import product4 from "../images/image-product-4.jpg";
import product4Thumbnail from "../images/image-product-4-thumbnail.jpg";

export default function BackdropComp({
  openBackdrop,
  handleClose,
  handleToggle,
  selectedProduct,
  setSelectedProduct,
  prev,
  next,
  current,
}) {
  const [selectedProductBackDrop, setSelectedProductBackDrop] = useState(
    product1
  );

  const products = [product1, product2, product3, product4];
  const productsThumbnails = [
    product1Thumbnail,
    product2Thumbnail,
    product3Thumbnail,
    product4Thumbnail,
  ];

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

  return (
    <div>
      <Backdrop
        className="backdrop"
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        {" "}
        <div className="backdrop-main-container">
          <Button className="previous" onClick={prev}>
            <img src={previous} alt="previous" />
          </Button>
          <img className="backdrop-main" src={products[current]} alt="shoes" />
          <Button className="next" onClick={next}>
            <img src={iconNext} alt="next" />
          </Button>
          <Button className="backdrop-close" onClick={handleClose}>
            <img src={close} alt="close" fill="currentColor" />
          </Button>
        </div>
        {/* PRODUCT THUMBNAILS */}
        <div className="backdrop-img-container">
          {productItems.map((item) => (
            <Button
              className="button"
              onClick={() => setSelectedProductBackDrop(item.product)}
            >
              <img
                src={item.src}
                alt="dog"
                style={{
                  border:
                    selectedProductBackDrop == item.product
                      ? "3px solid hsl(26, 100%, 45%)"
                      : "",
                  opacity: selectedProductBackDrop == item.product ? 0.7 : "",
                }}
              />
            </Button>
          ))}
        </div>
      </Backdrop>
    </div>
  );
}
