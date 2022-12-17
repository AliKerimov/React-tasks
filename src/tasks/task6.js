import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react';
import pen from "../imgs/pen.png";
import del from "../imgs/delete.png";
import diskette from "../imgs/diskette.png"
import cancel from "../imgs/cancel.png"


const addbtnCss = css`
width:120px;
border:1px solid blue;
font-size:20px;
display:flex;
justify-content:center;
align-items:center;
`
const imgCss = css`
    width:20px;
`
const fontCss = css`
width:100%;
text-align:center;
padding:6%;
color:blue;
`
const flexCss = css`
  display:flex;
`
const overCss = css`
text-decoration: line-through;
`
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("New Todo.");
  const [count,setCount]=useState(0);
  const [id, setId] = useState(1);
  function createTodo() {
    setTodos([...todos, { id: id, todo: "New Todo.", checked: false, edit: false }])
    setId((c) => c + 1)
  }

  function updateTodo(id) {
    setTodos(prev => prev.map(item => ({ ...item, checked: item.id === id ? !item.checked : item.checked })))
  }
  useEffect(()=>{
    let c=0;
    console.log(todos);
    todos.map(el=>{
      if(el.checked){
        c++;
        setCount(c)
      }if(count===1 && c===0){setCount(0)}
    })
  },[todos])
  console.log(todos);
  function changeTodo(id) {
    setTodos(prev => prev.map(item => ({ ...item, todo: item.id === id ?  input : item.todo })))
  }
  function deleteTodo(id) {
    setTodos(prev => prev.filter(el => el.id !== id))
  }
  
  function editTodo(id) {
    setTodos(prev => prev.map(item => ({ ...item, edit: item.id === id ? !item.edit : item.edit })))
  }

  // console.log(todos);

  return (
    <div>
      <h1>Task6</h1>
      <h1>Todo List {count}</h1>
      {todos !== [] &&
        todos.map((todo,id) => {
          return (<div key={id}>
            <div css={flexCss}>
              <input onChange={() => { updateTodo(todo.id) }} type="checkbox" name="" checked={todo.checked} value=""></input>
              <span>
                {todo.edit === true ?
                  <input onChange={(e) => { setInput(e.target.value) }} type="text" name="" value={input}></input>
                  :
                  <span css={todo.checked && overCss}>{todo.todo}</span>
                }
              </span>
              {todo.edit === false ?
                <div>
                  <img onClick={() => { editTodo(todo.id) }} css={imgCss} src={pen}></img>
                  <img onClick={()=>{deleteTodo(todo.id)}}  css={imgCss} src={del}></img>
                </div>
                :
                <div>
                  {/* <span>hisis</span> */}
                  <img onClick={() => { changeTodo(todo.id); editTodo(todo.id) }} css={imgCss} src={diskette}></img>
                  <img onClick={() => { editTodo(todo.id) }} css={imgCss} src={cancel}></img>
                </div>
              }
            </div>
          </div>)
        })
      }
      <div onClick={createTodo} css={addbtnCss}><span css={fontCss}>+ New Todo</span></div>
    </div>
  )
}



const task6 = () => {
  return (
    <TodoList />
  )
}

export default task6