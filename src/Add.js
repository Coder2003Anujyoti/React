import React,{useState,useEffect} from 'react';
import "./Search.css";
import Contact from "./Contact.js";
const Add=({add,back,d,setD})=>{
  const [value,setValue]=useState("");
  const [it,setIt]=useState(d);
  const handle=()=>{
    let k=-1;
    if(value.trim()!=''){
    const po=it.map((ele,index)=>{
 if(ele.toUpperCase()===value.trim().toUpperCase()){
    setValue('');
  alert("Already added-: "+value.trim());
    k=0;
 }
    });
 if(k==-1){
   alert("New addition-: "+value.trim());
   setIt([...it,value]);
    setValue('');
    setD([...d,value.trim()]);
 }
    }
  }
  const rem=(ele)=>{
    const k=d.filter((i)=>{
      if(i!=ele)  
      return i;
    });
    alert("Removed Name-: "+ele);
    setD(k);
    setIt(k);
  }
  return(
    <>
        { add===true &&
      <>
  <h1 id="head1">Modify Your Friends</h1>
  <input id="inp1" value={value} onChange={(e)=>setValue(e.target.value)} />
  <button id="bac" onClick={back}>X</button>
       { it.length>0 && <div id="boxs">{it.map((item)=>{
      return(
         <>
        <div id="box" onClick={()=>rem(item)}>
        <h5 id="name">{item}</h5>
        </div>
        </>
        )
      })}
      </div>
     }
     <button id="a" onClick={handle}>Add</button>
      </>
      }
      </>
      )
}
export default Add;