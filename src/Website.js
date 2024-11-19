import React,{useState,useEffect} from 'react';
import Birds from "./Birds.js";
import Pig from "./Pig.js";
import Ben from "./Ben.js";
import Pok from "./Pok.js";
import Power from "./Power.js";
import Aselect from "./Aselect.js";
import "./Website.css";
const buttons=[{value:"Birds",color:false},{value:"Piges",color:false},{value:"Pokes",color:false},{value:"Alien",color:false},{value:"Power",color:false}];
const Website=({about,filter})=>{
  const [team,setTeam]=useState(buttons);
  const [name,setName]=useState([]);
  const [tog,setTog]=useState(false);
  const change=(i)=>{
   const k=team.map((it)=>{
     it.color=false;
     if(i.value==it.value){
       it.color=true;
     }
     return {...it};
   });
    if(i.value=="Birds"){
      setName(Birds);
      setTeam(k);
      
    }
    if(i.value=="Piges"){
      setName(Pig);setTeam(k);
    }
    if(i.value=="Pokes"){
      setName(Pok);setTeam(k);
    }
    if(i.value=="Alien"){
      setName(Ben);setTeam(k);
    }
    if(i.value=="Power"){
      setName(Power);setTeam(k);
    }
    setTog(true);
  }

  return(
    <>
      <h2 id="team-details">Teams Details</h2>
      <div id="button-container">
        {team.map((i)=>{
          return(
          <button id="btn" style={{
    backgroundColor:`${(tog==true && i.color===true)?"#39ff14":"black"}`,
    color:`${(tog==true && i.color==true)?"black":"white"}`,border:`${(tog==true && i.color==true)?"2px solid #39ff14":"2px solid black"}`
  }}  onClick={()=>change(i)}>{i.value}</button>
          )
        })}
      </div>
      <div id="team-container">
         {name.map((i)=>{
          return(
          <img src={i.src} id="image" /> 
          )
        })}
      </div>
      <button id="pback2" onClick={filter}>X</button>
    </>
    
    )
}
export default Website;