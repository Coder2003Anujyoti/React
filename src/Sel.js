import React,{useState,useEffect} from 'react';
import Birds from "./Birds.js";
import Pig from "./Pig.js";
import Ben from "./Ben.js";
import Pok from "./Pok.js";
import Power from "./Power.js";
import "./Angries.css";
import Angry from './Angry.js';
import Aselect from './Aselect.js';
const Sel=({option,pvalue,cvalue,pname,cname})=>{
  const [psteam,setPsteam]=useState(pvalue);
  const [csteam,setCsteam]=useState(cvalue);
  const [count,setCount]=useState(0);
  const [click ,setClick]=useState(false);
  const [image,setImage]=useState("");
  const [pteam,setPteam]=useState([]);
  const [cteam,setCteam]=useState([]);
  const [start,setStart]=useState(false);
  const [disable,setDisable]=useState(false);
  const handle=(i)=>{
    setImage(i.src);
    setClick(true);
  }
  const select=()=>{
    let a=Math.floor(Math.random()*csteam.length);
    const k=psteam.filter((i)=>{
      return i.src!=image
    });
    const r=csteam.filter((item,ind)=>{
      if(!(ind==a))
      {
        return item.src
      }
    });
    setCteam([...cteam,{src:csteam[a].src,raid:0,defence:0,disable:false}]);
    setCsteam(r);
    setPsteam(k);
    setPteam([...pteam,{src:image,raid:0,defence:0,disable:false}]);
    setCount(count+1);
    setClick(false);
   
  }
  
  const back=()=>{
    setClick(false);
  }
  return(<>
       <meta name="viewport" content= "width=device-width, user-scalable=no" />
    {count<10 && 
    <>
 <h2 id="anuj">Select {10-count} players of {pname} </h2>
  <div id="plaer">{ psteam.map((i,ind)=>{
return(<> <div id="poc"><img id="lis" src={i.src} onClick={()=>{handle(i)}} ></img></div></>) })}</div>


  {click==true && count<10 &&  <>
     <img src={image} id="pic" />
    <button id="s" onClick={select}>Select</button>
    <button id="b" onClick={back}>Back</button>
    </>
  }
 {count==10 && <button id="start" onClick={()=>setStart(true)}>Start</button>}
  </>
    }
    {count==10 && <Angry option={option} pteam={pteam} cteam={cteam} pname={pname} cname={cname} psteam={psteam} csteam={csteam} pvalue={pvalue} cvalue={cvalue}/>}
  </>)
}
export default Sel;