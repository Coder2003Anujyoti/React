import React,{useState} from 'react';
import Name from './Name.js';
const Call=()=>{
  const [value,setValue]=useState("");
  return(
    <>
      <h1>Enter Name:</h1>
    <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    <Name value={value}/>
    </>
    )
}
export default Call;