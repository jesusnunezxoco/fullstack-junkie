import React from "react";
import { Link } from "react-router-dom";
import style from "./Product.module.css";
import defaultPic from "../assets/kirby.jpg"

export default function Product() {
  return (
    <article className={style.product}>
      <img src={defaultPic} alt="product" />
      <div className={style.product__info}>
        <h3 className={style.info__name}>Product 1</h3>
        <p className={style.info__desc}>
          Magna esse cillum ad minim velit mollit laborum occaecat ullamco
          pariatur. Exercitation aliquip ex consequat velit consequat elit elit
          nostrud est officia. Anim id anim adipisicing id in eiusmod.
        </p>
        <p className={style.info__price}><strong>$499.99</strong></p>
        <Link to={`/products/${1111}`} className={style.info__button}>
          View
        </Link>
      </div>
    </article>
  );
}
