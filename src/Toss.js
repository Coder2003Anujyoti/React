import React,{useState} from 'react';
import './Toss.css';
import Play from './Play.js';
const Toss=()=>{
  const [toss,setToss]=useState("");
  const [dis,setDis]=useState(false);
const [toggle,setToggle]=useState(false);
const [opt,setOpt]=useState("");
  const increment=()=>{
  setDis(true);
    let k=Math.floor(Math.random()*2);
  if(k==0){setToss("Computer won toss");
    let r=Math.floor(Math.random()*2);
    if(r==0)setOpt("Computer Ball");
    if(r==1)setOpt("Computer Bat");}
if(k==1){setToss("Player won toss");} };
  const my={
    display:`${toggle?"none":"block"}`
  };
  return(
    <>
      <div className="toss" style={my}>
  <button className="toss-btn" onClick={increment} disabled={dis}>Toss</button>
  {toss==="Player won toss"?
   <h1 className="heading">{toss}</h1>:<h1 className="heading1">{opt}</h1>}
  { toss!="" && (toss === "Player won toss" ?( <>
 <button className="bat" onClick={()=>{setToggle(true);
      setOpt("Player Bat")
    }}>Bat</button>
    <button className="ball" onClick={()=>{setToggle(true);
      setOpt("Player Ball")
    }}>Ball</button>
  </> ):(<>
<button className="ok" onClick={()=>{setToggle(true)}}>
  Ok</button>
  </>))}
  </div>
  {toggle==true && <Play opt={opt} />}
    </>
    )
}
export default Toss;