import React from "react";
import style from "./ProductPage.module.css";
import defaultPic from "../assets/kirby.jpg"
export default function ProductPage() {
  return (
    <div className={style.productpage}>
      <div className={style.productpage__left}>
        <div className={style.left__image}>
          <img src={defaultPic} alt="product" />
        </div>
        <div className={style.left__info}>
          <h2 className={style.left_name}>Product 1</h2>
          <p>Price: $499</p>
          <p>Description: $499</p>
        </div>
      </div>
      <div className={style.productpage__right}>
        <div className={style.right__info}>
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty:{" "}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <div>
            <button type="button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
