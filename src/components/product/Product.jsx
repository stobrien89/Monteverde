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
        <div className="product__rating">
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg"
            alt=""
          />
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg"
            alt=""
          />
          <img
            src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg"
            alt=""
          />
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
