import React from 'react'
import Product from "../components/Product";
import style from "./Shopping.module.css";
export default function Products() {
  return (
    <div className={style.shopping__page}>
      <h2 className={style.shopping__title}>Latest Products</h2>
      <div className={style.shopping__products}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}
