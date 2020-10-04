import React from "react";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>Example product title</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
    </div>
  );
};

export default Product;
