import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar({ handleToggle }) {
  const Logo = () => (
    <div className={style.navbar__logo}>
      <h2>MERN Shopping Cart</h2>
    </div>
  );

  const Links = () => (
    <div className={style.navbar__links}>
      <Link to="/">
        <i className="fas fa-home"></i>Home
      </Link>
      <Link to="/products">
        <i className="fas fa-store"></i>Shopping
      </Link>
      <Link to="/cart" className={style.cart__link}>
        <i className="fas fa-shopping-cart"></i>
        Cart <span className={style.cartlogo_badge}>0</span>
      </Link>
    </div>
  );

  const Hamburger = () => (
    <div className={style.hamburger__menu} onClick={handleToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
  return (
    <nav className={style.navbar}>
      <Logo />
      <Links />
      <Hamburger />
    </nav>
  );
}
