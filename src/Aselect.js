import React,{useState,useEffect} from 'react';
import Birds from "./Birds.js";
import Pig from "./Pig.js";
import Ben from "./Ben.js";
import Pok from "./Pok.js";
import Power from "./Power.js";
import "./Angries.css";
import Angry from './Angry.js';
import Sel from './Sel.js';
const item=[{name:"Pokes",disable:false},{name:"Piges",disable:false},{name:"Birds",disable:false},{name:"Power",disable:false},{name:"Alien",disable:false}];
const Aselect=()=>{
  const [pi,setPi]=useState(item);
  const [ci,setCi]=useState(item);
  const [option,setOption]=useState("");
  const [pvalue,setPvalue]=useState("");
  const [cvalue,setCvalue]=useState("");
  const [pdisable,setPdisable]=useState(false);
  const [cdisable,setCdisable]=useState(false);
  const [opdisable,setOpdisable]=useState(false);
  const [rule,setRule]=useState(false);
  const [ok,setOk]=useState(false);
  const [start,setStart]=useState(false);
  const [pname,setPname]=useState("");
  const [cname,setCname]=useState("");
  const [comment,setComment]=useState(false);
  const [about,setAbout]=useState(false);
  const toss=(e)=>{
    setOption(e.target.value);
    setOpdisable(true);
  }
  const plch=(e)=>{
    const p=item.map((i)=>{
      i.disable=false;
       if(i.name===e.target.value){
         i.disable=true;
       }
       return {...i};
    });
    if(e.target.value=="Pokes"){
      setPvalue(Pok);
      setPdisable(true);
      setPname(e.target.value);
      setCi(p);
    }
    else if(e.target.value=="Piges"){
      setPvalue(Pig);
      setPdisable(true);
      setPname(e.target.value);
      setCi(p);
    }
    else if(e.target.value=="Birds"){
      setPvalue(Birds);
      setPdisable(true);
      setPname(e.target.value);
      setCi(p);
    }
    else if(e.target.value=="Power"){
      setPvalue(Power);
      setPdisable(true);
      setPname(e.target.value);
      setCi(p);
    }
    else
    {
      setPvalue(Ben);
      setPdisable(true);
      setPname(e.target.value);
      setCi(p);
    }
  }
  const clch=(e)=>{
    const p=item.map((i)=>{
      i.disable=false;
       if(i.name===e.target.value){
         i.disable=true;
       }
       return {...i};
    });
    if(e.target.value=="Pokes"){
      setCvalue(Pok);
      setCdisable(true);
      setCname(e.target.value);
      setPi(p);
    }
    else if(e.target.value=="Piges"){
      setCvalue(Pig);
      setCdisable(true);
      setCname(e.target.value);
      setPi(p);
    }
    else if(e.target.value=="Birds"){
      setCvalue(Birds);
      setCdisable(true);
      setCname(e.target.value);
      setPi(p);
    }
    else if(e.target.value=="Power"){
      setCvalue(Power);
      setCdisable(true);
      setCname(e.target.value);
      setPi(p);
    }
    else
    {
      setCvalue(Ben);
      setCdisable(true);
      setCname(e.target.value);
      setPi(p);
    }
  }
  const tog=()=>{
    setOk(true);
  }
  const filter=()=>{
    setAbout(false);
  }
  const filters=()=>{
    setComment(false);
  }
  
  return(<>
    <meta name="viewport" content= "width=device-width, user-scalable=no" />
    { ok===false && rule==false && about==false  && comment==false &&
    <>
 <h1 id="ang"><marquee direction="left">Vivo Kabaddi Game</marquee></h1>
  <img src="images/Anu.jpg" id="g"></img>
  {start===true &&
  <>
    <div id="select-contain">
  <h2 id="r">Select Points:</h2>
  <select id="sel" onChange={(e)=>toss(e)}>
    <option disabled={opdisable}>Select</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
        <option value="25">25</option>
          <option value="30">30</option>
    </select>
    <h2 id="re">Select Player:</h2>
<select id="f" onChange={(e)=>plch(e)}>
   <option disabled={pdisable}>Select</option>
  {pi.map((i)=>{
    return <option value={i.name} disabled={i.disable}>{i.name}</option>
  })}
</select>
 <h2 id="rp">Select Computer:</h2>
<select id="hh" onChange={(e)=>clch(e)}>
  <option disabled={cdisable}>Select</option>
  {ci.map((i)=>{
    return <option value={i.name} disabled={i.disable}>{i.name}</option>
  })}
</select>
{option!="" && pvalue!="" && cvalue!="" &&<button id="bn" onClick={tog}>Ok</button>}
</div>
</>}
</>
}
{start==false && rule==false && about==false && comment==false && <>
  <button id="win" onClick={()=>setRule(!rule)}>Rule Book</button>
  </>
  }

{ok===true && rule==false && about==false && comment==false && <Sel option={option} pvalue={pvalue} cvalue={cvalue} pname={pname} cname={cname}/>}
{start==false && rule===false && about==false && comment==false && <button id="sgame" onClick={()=>setStart(true)}>Start Game</button>}


{ok==false && rule==true && about==false && comment===false &&
<>
  <h2 id="kab">Rules of Kabaddi</h2>
  <div id="list">
    <p>1.Select the Maximum Points,Player team and Computer team.</p>
    <p>2.Select 10 players out of 12 players from Player team and the remaining 2 players are substitution options.</p>
    <p>3.Toss first and the upper part represents player team while the lower part represents computer team
     .</p>
     <p>4.Select any 1 player from the above list.After selecting ,option shows whether you have to raid or defence and the buttons appear on your screen.</p>
     <p>5.For a successful raid you choose a number such that the sum of your choice and computer choice gives odd value and For a successful defence you choose a number such that the sum of your and computer choice gives even value.</p>
     <p>6.For a successful raid/defence your/computer team will be awarded with 1 point and also revive a player who become out due to unsucessful attempt of raid/defence.</p>
     <p>7.For an unsuccessful raid/defence,no points are awarded to your/computer team as well as that particular player got out from the playing field and waiting for the other players to revive him after attempting successful raid/defence.</p>
     <p>8.You/computer can also substitute any 1 player with the player from the substitution bench but for only one time.Substitution is possible after the 1st raid/defence attempt by your/computer team and before winning the match by your/computer team.</p>
     <p>9.For doing Substitution,you need to click on the picture of player in substitution bench and then click on the player which you want to replace with that.</p>
     <p>10.You/computer win the match either by achieving the maximum points or out all the players of opposition team. </p>
    
     <p>11.After the match is over you see the raid and defence points earned by each players of your/computer team.</p>
  </div>
  <button id="pback2" onClick={()=>setRule(false)}>X</button>
  
  

</>}

    </>
    )
}
export default Aselect;