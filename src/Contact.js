import React,{useState,useEffect} from 'react';
import "./Search.css";
import Search from "./Search.js";
import Add from "./Add.js";
const data=["Anujyoti","Kishan","Bishal","Upayan","Darpan","Aman","Sagnik","Krishan","Arpo","Samiran","Shubha","Bihan","Ritesh"];
const list=()=>{
  const val=localStorage.getItem('item');
  if(val){
    return JSON.parse(val);
  }
  else{
    return [];
  }
}
const Contact=()=>{
const [search,setSearch]=useState(false);
const [add,setAdd]=useState(false);
const [d,setD]=useState(data);
const back=()=>{
  setSearch(false);
  setAdd(false);
  localStorage.setItem('item',JSON.stringify(d));
}
return(
  <> 
  
  { search===false && add===false &&
      <>
      <h1 id="head">Yours Contacts List</h1>
        <button id="sear" onClick={()=>setSearch(true)}>Search Contacts</button>
        <button id="add" onClick={()=>setAdd(true)}>Modify Contacts</button>
        </>
      }
      {
        search===true && <Search search={search} back={back} d={d}/>
      }
      {
        add===true && <Add add={add} back={back} d={d} setD={setD}/>
      }
  </>
  )
}
export default Contact;