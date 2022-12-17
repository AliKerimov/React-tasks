import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react';

const errCss = css`
  border-color:red;
  color:red;
`
const success = css`
  border-color:black
`
function TextField(props) {

  const onChange = event => {
    if (event.target.value.length > props?.maxLength) return;
    props?.onChange(event.target.value);
  }

  return (
    <div>
      <h1>Task 3</h1>
      <label css={props?.error === true ? errCss : success} for="">Label {props?.isRequired === true && <span>*</span>}</label>

      {props?.onChange ?
        <input  css={props?.error === true ? errCss : success} type="text" name="" defaultValue={props?.value} onChange={e => onChange(e)}></input>
        : <input css={props?.error === true ? errCss : success} type="text" name="" readOnly defaultValue={props?.value} onChange={e => onChange(e)}></input>}

      <p>
        <span css={props?.error === true ? errCss : success}>{props?.helperText !== null && props?.helperText}</span>
        {props?.value.length}/{props?.maxLength}
      </p>
    </div>
  );
};

// memo(TextField);
const task2 = () => {
  const [input, setInput] = useState("We ❤️ React!");


  function myCallback(text) {
    setInput(text)
  }


  return (
    <>
      <TextField
        label="Label"
        value={input}
        onChange={myCallback}
        isRequired={true}
        maxLength={20}
        helperText="Error message"
        error={true}
        disabled={false}
      />
    </>
  );
}

export default task2