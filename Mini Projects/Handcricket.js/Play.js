import React,{useState,useEffect} from "react";
import "./Toss.css";
const Play=({opt})=>{
  const [prun,setPrun]=useState(0);
  const [crun,setCrun]=useState(0);
  const [pwk,setPwk]=useState(0);
  const [cwk,setCwk]=useState(0);
  const [pnumber,setPnumber]=useState(0);
  const [cnumber,setCnumber]=useState(0);
  const [target,setTarget]=useState(-1);
const [turn,setTurn]=useState(false);
const [win,setWin]=useState("");
const [count,setCount]=useState(0);
const [disable,setDisable]=useState(false);
  const inc=(i)=>{
    if(turn==false || turn==true){
  let k=Math.floor(Math.random()*6)+1;
    setPnumber(i);
    setCnumber(k);
    setCount(count+1);
    }
  };
  useEffect(()=>{
    
    if(opt=="Player Bat" || opt=="Computer Ball")
    { 
      if(pnumber!=cnumber)
  {if(turn==false){
    setPrun(prun+pnumber);
    
  }
    if(turn==true){
    setCrun(crun+cnumber);
    
    }
  }
   else if(pnumber==cnumber && pnumber!=0)
    { if(turn==false)
     {
      setPwk(pwk+1);
      setTarget(prun+1);
      setTurn(!turn);
     }
     if(turn==true)
     {
       setCwk(cwk+1);
     }
    }
    }
    if(opt=="Computer Bat" || opt=="Player Ball")
    { 
      if(pnumber!=cnumber)
  {if(turn==false){
    setCrun(crun+cnumber);
    
  }
    if(turn==true){
    setPrun(prun+pnumber);
    
    }
  }
   else if(pnumber==cnumber && cnumber!=0)
    { if(turn==false)
     {
      setCwk(cwk+1);
      setTarget(crun+1);
      setTurn(!turn);
     }
     if(turn==true)
     {
       setPwk(pwk+1);
     }
    }
    }
    
  },[count]);
  
  return(
    <>
    <h1 id="p">Player</h1>
    <div id="pbox">{pnumber}</div>
    <h1 id="c">Computer</h1>
    <div id="cbox">{cnumber}</div>
    { (((opt=="Player Bat" || opt=="Computer Ball") && ( cwk!=1 && crun<prun+1 )) ||((opt=="Computer Bat" || opt=="Player Ball") && ( pwk!=1 && prun<crun+1 )))&&
    <div id="buttons">
<button onClick={()=>{inc(1)}}>1</button>
<button onClick={()=>{inc(2)}}>2</button>
<button onClick={()=>{inc(3)}}>3</button> 
<button onClick={()=>{inc(4)}}>4</button> 
<button onClick={()=>{inc(5)}}>5</button>
<button onClick={()=>{inc(6)}}>6</button>
    </div>
    }
        { (opt=="Player Bat" || opt=="Computer Ball") && ((turn==false) ?<div id="run">Player score :{prun}/{pwk}</div>
      :<div id="run">Computer score :{crun}/{cwk}</div>)
    }
  { (opt=="Computer Bat" || opt=="Player Ball") && ((turn==true) ? <div id="run">Player score :{prun}/{pwk}</div>: <div id="run">Computer score :{crun}/{cwk}</div>)
        }
  {target!=-1 &&
    <div id="target">Target is:{target}</div>}
{(((opt=="Player Bat" || opt=="Computer Ball")&&(turn==true && cwk==1 && crun<prun ))||((opt=="Computer Bat" || opt=="Player Ball")&&
  (turn==true && pwk==0 && crun<prun )))
    &&
    <h1 id="res">Result:Player win</h1>
}
{(((opt=="Player Bat" || opt=="Computer Ball")&&(turn==true && cwk==0 && crun>prun ))||((opt=="Computer Bat" || opt=="Player Ball")&&
(turn==true && pwk==1 && crun>prun )))
    &&
    <h1 id="res">Result:Computer win</h1>
}
{(((opt=="Player Bat" || opt=="Computer Ball")&&(turn==true && cwk==1 && crun==prun ))||((opt=="Computer Bat" || opt=="Player Ball")&&
  (turn==true && pwk==1 && crun==prun )))
    &&
    <h1 id="res">Result:Draw</h1>
}
  </>
  )
};
export default Play;