import style from "./SideDrawer.module.css";
import { Link } from "react-router-dom";

export default function SideDrawer({ show, handleToggle }) {
  const Links = () => (
    <div className={style.sidedrawer__links}>
      <Link to="/">
        <i className="fas fa-home"></i>Home
      </Link>
      <Link to="/shopping">
        <i className="fas fa-store"></i>Shopping
      </Link>
      <Link to="/cart" className={style.cart__link}>
        <i className="fas fa-shopping-cart"></i>
        Cart <span className={style.sidedrawer__cartbadge}>0</span>
      </Link>
    </div>
  );
  return (
    <div
      className={show ? `${style.sidedrawer} ${style.show}` : style.sidedrawer}
    >
      <div className="sidedrawer__links" onClick={handleToggle}>
        <Links />
      </div>
    </div>
  );
}
