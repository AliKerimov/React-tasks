import React, { useEffect, useState } from "react";
import like from "../imgs/like.png"
import dislike from "../imgs/dislike.png"
import { css } from '@emotion/react';

const imgCss = css`
    width:20px;
`
const contCss = css`
    display:flex;
    gap:10px;
`
const succes=css`
    color:green;
`
const err=css`
    color:red;
`
const task5Css=css`
    height:100px;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center
`
function HappyCounter() {
    let [counter, setCounter] = useState(0);
    let [message, setMessage] = useState(0)
    useEffect(() => {
        if (counter > 5) {
            setMessage(1)
        } else if (counter < 0) {
            setMessage(-1)
        }else{
            setMessage(0)
        }
    }, [counter])
    function resetHandler() {
        setCounter(0);
    }
    function incrementHandler() {
        setCounter(counter => counter + 1);
    }
    function decrementHandler() {
        setCounter(counter => counter - 1);
    }
    return <div css={task5Css}>
        {(() => {
            if (message === 1) {
                return (
                    <p css={succes}>succes</p>
                )
            } else if (message === -1) {
                return (
                    <p css={err}>error</p>
                )
            }
        })()}
        <div css={contCss}>
            <img onClick={decrementHandler} css={imgCss} src={dislike}></img>
            <div>{counter}</div>
            <img onClick={incrementHandler} css={imgCss} src={like}></img>
        </div>
        
        <div onClick={resetHandler}>Reset</div>
    </div>;
}

function Task1() {
    return (
        <div>
            <h1>Task5</h1>
            <HappyCounter />

        </div>
    )
}

export default Task1;
