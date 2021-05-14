import React from 'react'
import style from "./Backdrop.module.css"
export default function Backdrop({show, handleToggle}) {
  return show ? <div class={style.backdrop} onClick={handleToggle}></div> : null;
}
