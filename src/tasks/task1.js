import React, { useEffect, useState } from "react";
import success from '../imgs/success.png'
import info from '../imgs/info.png'
import close from '../imgs/close.png'
import warning from '../imgs/warning.png'
import error from '../imgs/error.png'
import { css } from '@emotion/react';
const myCss = ({ backgroundColor }) => css`
  background-color: ${backgroundColor};
  padding: 4px; 
  display:flex;
  align-items:center;
  margin:4px; 
  color: dark${backgroundColor};
  font-weight: 900;
  font-size: 30px;
`;
const imgCss = css`
  width:4%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 4px; 
  margin:4px; 
`;
const btnCss = ({ backgroundColor }) => css`
  width:4%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  border:none;
  background-color:${backgroundColor};
`;
const closeCss = ({ backgroundColor }) => css`
display:flex;
justify-content:flex-end;
margin-right:10px;
`
const contCss = ({ backgroundColor }) => css`
display:flex;
justify-content:space-between;
align-items:center;
padding: 8px; 
margin:8px; 
border-radius:15px;
background-color:${backgroundColor};

`

function Alert(props) {
  const [color, setColor] = useState('');
  const [img, setImg] = useState('');
  useEffect(() => {

    if (props.severity === "error") { setColor('red'); setImg(error) }
    else if (props.severity === "warning") { setColor('orange'); setImg(warning) }
    else if (props.severity === "info") { setColor('cyan'); setImg(info) }
    else if (props.severity === "success" || props.severity === "") { setColor('green'); setImg(success) }
    else { setColor('white') }
  }, [])
  return <div css={contCss({ backgroundColor: color })} >
    <div css={myCss({ backgroundColor: color })}>
      <img css={imgCss} src={img} alt=""></img>
      {props.children}
    </div>
    {props.onClose &&
      <div css={closeCss}>
        <img onClick={()=>{props.onClose()}} src={close} css={btnCss({ backgroundColor: color })}></img>
      </div>
    }
  </div>;
}

function Task1() {
  return (
    <div>
      <h1>Task1</h1>
      <Alert severity="error" onClose={() => { console.log('hi'); }} >This is error alert</Alert>
      <Alert severity="warning" >This is warning alert</Alert>
      <Alert severity="info" >This is info alert</Alert>
      <Alert severity="success" >This is success alert</Alert>
    </div>
  )
}

export default Task1;
