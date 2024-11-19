import React,{useState,useEffect} from 'react';
import "./Search.css";
import Contact from "./Contact.js";
const Search=({search,back,d})=>{
  const [text,setText]=useState("");
  const [it,setIt]=useState([]);
  const handle=(e)=>
  {setText(e.target.value);}
  useEffect(()=>{
   const f= d.filter((item)=>{
  if(text.trim()!='' && item.toUpperCase().includes(text.trim().toUpperCase())){
    return item;}})
    setIt(f);},[text]);
  return(
      <>
      <h1 id="head">Search Your Friends</h1>
      <input id="inp" value={text} onChange={(e)=>handle(e)} />
     { it.length>0 && <div id="boxs">{it.map((item)=>{
      return(
         <>
        <div id="box">
        <h5 id="name">{item}</h5>
        </div>
        </>
        )
      })}</div>
     }
     { it.length==0  && text.trim()!='' && 
     <div id="no">Not Found</div>}
     <button id="bac" onClick={back}>X</button>
    </>
    )
  
}
export default Search;