import React from "react";
import CartItem from "../components/CartItem";
import s from "./Cart.module.css";
export default function Cart() {
  return (
    <div className={s.cart__page}>
      <div className={s.cartpage__left}>
        <h2>Shopping Cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={s.cartpage__right}>
        <div className={s.cartpage__info}>
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button className={s.cartpage__checkoutBtn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
