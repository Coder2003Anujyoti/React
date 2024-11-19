import React,{useState} from 'react';
import './Pass.css';
const Pass=()=>{
const [type,setType]=useState("password");
  return(
    <>
    <div id="box">
      <h1 id="head">Enter Password</h1>
      <input type={type} id="inp" />
      {type==="password" ? 
      <img src="images/See.png" id="image" onClick={()=>setType("text")}/>:<img src="images/Hide.png" id="image" onClick={()=>setType("password")}/>
      }
    </div>
    </>
    )
}
export default Pass;