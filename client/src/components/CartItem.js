import React from "react";
import { Link } from "react-router-dom";
import s from "./CartItem.module.css";
import defaultPic from "../assets/kirby.jpg";
export default function CartItem() {
  return (
    <div className="cart__item">
      <div className="cartitem__image">
        <img src={defaultPic} alt="cart item" />
      </div>
      <Link to={`/products/${111}`}>
        <h3>Product Name</h3>
      </Link>
      <p className={s.cartitem__price}> </p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className={s.cartitem__deleteBtn}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
