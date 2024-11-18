import React, { useState } from 'react';
import './Todo.css';
const Todo = () => {
const [value,setValue]=useState("");
const [items,setItems]=useState([]);
const [isEdit,setIsEdit]=useState("");
const [toggle,setToggle]=useState(false);
const [count,setCount]=useState(0);
const add=()=>{
  if(value=="")
  {
    alert('Please Enter text');
  }
  else if (value && toggle) {
      
       const update=items.map((curElem) => {
          if (curElem.id === isEdit) {
       return{...curElem,name:value};
          }
          
          
        return curElem;
          
        });
      
       setItems(update);
      setValue("");
      setIsEdit("");
      setToggle(false);
    }
  else
  { 
    const myItems={
      id:count,
      name:value
    };
    setItems([...items,myItems]);
    setValue("");
    setCount(count+1);
  }
}
const deleteitem=(k)=>{
  const delit=items.filter((ele)=> {
    if(ele.id!=k)
      return {...ele};});
  setItems(delit);
};
const edititem=(k)=>{
  const a=items.find((ele)=>{
    if(ele.id==k)
    return {...ele};
  });
  setValue(a.name);
  setIsEdit(k);
  setToggle(true);
};
   return(
     <>
      <div className="container">
        <h1 className="head">Todo List</h1>
      <input className="inp"  value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Add Todo List"/>
      <button className="add" onClick={add}>{toggle?"Edit":"Add"}</button>
      </div>
      <div className="big-box">
      {items.map((current)=>{
      return(
      <>
      <div className="box" key={current.id}>
     <h3 className="item">{current.name}</h3>
     <button className="delete" onClick={
     ()=>deleteitem(current.id)}>Delete</button>
     <button className="edit" onClick={
     ()=>edititem(current.id)}>Edit</button>
      </div>
      </>
      );
      })}
   <button className="rev" style={items.length>0?{display:"block"}:{display:"none"}} onClick={()=>setItems([])}>Remove All</button>
      </div>
     </>
     );
};
export default Todo;