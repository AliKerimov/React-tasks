import React from 'react';
import {css} from '@emotion/react';
import SVGLogo from './svg_logo.svg';
import CatImg from './cat.png';

const myCss = css`
  background-color: orange;
  padding: 4px;
  color: cyan;
  font-size: 30px;
  
  &:hover {
    color: red;
  }
`;

function MyButton(props) {
  return <button css={myCss}>{props.children}</button>
}

function Sample() {
  return (
    <div>
      <MyButton>Styled Button</MyButton>
      <MyButton>Another styled button</MyButton>
      <img src={SVGLogo} alt="SVG Logo" width={100} height={100}/>
      <img src={CatImg} alt="Cat" width={100} height={100}/>

      <div>url of cat img: {CatImg}</div>
      <div>url of svg logo: {SVGLogo}</div>
    </div>
  )
}

export default Sample;