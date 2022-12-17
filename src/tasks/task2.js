import React, { memo, useEffect, useState } from 'react';
import img from "../imgs/depositphotos_46544511-stock-photo-soft-drink-sprite.jpg"
import { css } from '@emotion/react';

const imgCss = css`
  width:100%;
  border-radius:10px 10px 0px 0px;
`
const alignCss = css`
  margin-right:10px;
  text-align:right;
`
const sizeCss = css`
  font-size:30px;
  margin:5px;
`
const contCss = css`
  width: 20%;
  border-radius:10px;
  box-shadow: 3px 3px 3px 3px #888888;
  `

const flexCss = css`
  display:flex;
  justify-content:space-between;
  margin:0% 3%;
`
const incremCss = css`
    margin:5px;
    font-size:30px;
    text-align:right;
    margin-bottom:3%;
    margin-right:10%;
    border-radius:15px;
`
function CartItem(props) {
  return (
    <div css={contCss}>
      <img css={imgCss} src={props.thumbnail}></img>
      <div css={flexCss}>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>
      <div>
        {props.quantity < 1 ?
          <p css={incremCss} onClick={() => { props.onClick("+") }}><span>+</span></p>
          :
          <p css={alignCss}>
            <span css={sizeCss} onClick={() => { props.onClick("0") }}>x</span>
            <span css={sizeCss} onClick={() => { props.onClick("-") }}>-</span>
            <span css={sizeCss}>{props.quantity}</span>
            <span css={sizeCss} onClick={() => { props.onClick("+") }}>+</span>
          </p>
        }
      </div>
    </div>
  )
}


const task3 = () => {
  const [value, setValue] = useState(3);
  function myCallback(str) {
    if (str === "+") {
      setValue((c) => c + 1)
    } else if (str === "-") {
      setValue((c) => c - 1)
    } else if (str === "0") {
      setValue((c) => 0)
    }
  }
  return (
    <>
      <h1>Task 2</h1>
      <CartItem
        title="Sprite 300ml"
        price="1.00 AZN"
        thumbnail={img}
        quantity={value}
        onClick={myCallback}
      />
    </>
  )
}

export default task3