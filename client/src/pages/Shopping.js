import React from 'react'
import ProductCard from "../components/ProductCard";
import style from "./Shopping.module.css";
export default function Products() {
  return (
    <div className={style.shopping__page}>
      <h2 className={style.shopping__title}>Latest Products</h2>
      <div className={style.shopping__products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}
