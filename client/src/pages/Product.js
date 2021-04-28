import React from "react";
import s from "./Product.module.css";
import defaultPic from "../assets/kirby.jpg";
export default function ProductPage() {
  return (
    <div className={s.productpage}>
      <div className={s.productpage__left}>
        <div className={s.left__image}>
          <img src={defaultPic} alt="product" />
        </div>
        <div className={s.left__info}>
          <h2 className={`${s.left__name} ${s.info__item}`}>Product 1</h2>
          <p className={s.info__item}>
            <strong>Price:</strong> $499
          </p>
          <p className={s.info__item}>
            <strong>Description:</strong> Dolor mollit proident ipsum dolore
            aliqua sit. Ullamco minim qui amet aliquip ipsum qui qui aliquip
            Lorem do reprehenderit nostrud. Ipsum cupidatat consequat irure
            aliquip elit consectetur culpa velit proident consectetur labore.
          </p>
        </div>
      </div>
      <div className={s.productpage__right}>
        <div className={s.right__info}>
          <p className={s.info__item}>
            <strong>Price:</strong>
            <span>$499.99</span>
          </p>
          <p className={s.info__item}>
            <strong>Status:</strong>
            <span>In Stock</span>
          </p>
          <p className={s.info__item}>
            <strong>Qty:</strong>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p className={s.info__item}>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
}
