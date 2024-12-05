import React,{useState,useEffect} from 'react';
import Birds from "./Birds.js";
import Pig from "./Pig.js";
import Ben from "./Ben.js";
import Pok from "./Pok.js";
import Power from "./Power.js";
import Aselect from "./Aselect.js";
import Sel from './Sel.js';
import "./Angries.css";
const buttons=[1,2,3,4,5,6];
const Angry=({option,pteam,cteam,pname,cname,psteam,csteam,pvalue,cvalue})=>{
  const [plsteam,setPlsteam]=useState([]);
  const [plteam,setPlteam]=useState(pvalue);
  const [clteam,setClteam]=useState(cvalue);
  const [birds,setBirds]=useState(pteam);
  const [pigs,setPigs]=useState(cteam);
  const [player,setPlayer]=useState("");
const [computer,setComputer]=useState("");
const [disable,setDisable]=useState(true);
const [ch,setCh]=useState(0);
const [ppoint,setPpoint]=useState(0);
  const [cpoint,setCpoint]=useState(0);
  const [count,setCount]=useState(0);
  const [bird,setBird]=useState([]);
  const [pig,setPig]=useState([]);
  const [pl,setPl]=useState(0);
  const [co,setCo]=useState(0);
  const [plname,setPlname]=useState(pname);
  const [clname,setClname]=useState(cname);
  const [message,setMessage]=useState("");
  const [choice,setChoice]=useState("");
  const [r,setR]=useState(-1);
  const [sc,setSc]=useState(0);
  const [pback,setPback]=useState(false);
  const [cback,setCback]=useState(false);
  const [toggle,setToggle]=useState(false);
  const [team,setTeam]=useState(psteam);
  const [subc,setSubc]=useState(false);
  const [image,setImage]=useState("");
  const handle=(a,b)=>{
    if(disable===false && (co!=option)  && (birds.length!==0)  && (pl!=option) && (pigs.length!=0) && a.disable==false && toggle==false){
      birds.map((i)=>{
        i.disable=false;
        if(i.src===a.src){
          i.disable=true;
        }
      })
    setPlayer(a.src);
    setDisable(true);
    setMessage(computer);
    setComputer("");
    setR(r+1);
    }
    if(toggle==true && image!=""){
    const bo= birds.map((i,ind)=>{
        if(ind==b){
            i.src=image;
          i.raid=0;
          i.defence=0;
          i.disable=false;
        }
        return {...i};
      });
      setBirds(bo);
      setImage("");
      setToggle(false);
       setSubc(true);
    }
  }
  useEffect(()=>{
    if(pl+co===Math.floor(option/2) && disable==false && count>0){
      let ran=Math.floor(Math.random()*2);
      let ki=Math.floor(Math.random()*pigs.length);
      let y=pigs[ki].src;
      let rid=pigs[ki].raid;
      let def=pigs[ki].defence;
      const hi=pigs.map((i,ind)=>{
        if(ind==ki){
          i.src=csteam[ran].src;
          i.raid=0;
          i.defence=0;
          i.disable=false;
        }
        return {...i};
      });
      setPigs(hi);
      
      
        }
    
    
  },[pl,co]);
  
  const make=()=>{
    let k=Math.floor(Math.random()*2);
    if(k==0){
      setChoice("You");
      setDisable(false);
    }
    else{
      setChoice("Com");
      setDisable(false);
    }
  }
  useEffect(()=>{
    if(count!=0){
      
      let i=Math.floor(Math.random()*pigs.length);
        
     let scores=[1,2,3,4,5,6];
  let p=scores[Math.floor(Math.random()*6)];
  if(pigs[i].src===message){
    let k=(i+1)%pigs.length;
    setComputer(pigs[k].src);
    setCpoint(p);
        setDisable(false);
        setCh(ch+1);
  }
  else{
       setCpoint(p);
        setDisable(false);
        setCh(ch+1);
    setComputer(pigs[i].src);
  }
      
    }
  },[count]);
  useEffect(()=>{
    if(ch!=0 && ((count%2!=0 && (ppoint+cpoint)%2!==0) || (count%2==0 && (ppoint+cpoint)%2==0))) {
      if(choice=="Com"){
      const y1=birds.filter((i)=>{
        if(i.src!=player){
          return {...i};
        }
      });
      const l1=clteam.map((i)=>{
        if(((ppoint+cpoint)%2==0) && i.src==computer)
        { 
          i.defence+=1;
        }
        if(((ppoint+cpoint)%2!=0) && i.src==computer){
          i.raid+=1;
        }
        return {...i};
      });
      if(pigs.length!=10){
    const ele1=pig.find((i,ind)=>{
       if(ind==0){
         return i;
       }
     });
    const  m1=pig.filter((i,ind)=>{
       return ind!=0;
     });
     setPigs([...pigs,{src:ele1}]);
     setPig(m1);
      }
      setBird([...bird,player]);
      setBirds(y1);
      setCo(co+1);
    }
    if(choice=="You"){
      const y2=pigs.filter((i)=>{
        if(i.src!=computer){
          return {...i};
        }
      });
      plteam.map((i)=>{
        if(((ppoint+cpoint)%2==0) && i.src==player)
        {
          i.defence+=1;
        
        }
        if(((ppoint+cpoint)%2!=0) && i.src==player){
          i.raid+=1;
        
        }
        return {...i};
      })
      if(birds.length!=10){
        
    const ele2=bird.find((i,ind)=>{
       if(ind==0){
         return i;
       }
     });
     const m2=bird.filter((i,ind)=>{
       return ind!=0;
     });
     setBirds([...birds,{src:ele2,disable:false}]);
     setBird(m2);
      }
      setPig([...pig,computer]);
      setPigs(y2);
      setPl(pl+1);
    }
    }
    if(ch!=0 && ((count%2!=0 && (ppoint+cpoint)%2==0) || (count%2==0 && (ppoint+cpoint)%2!=0))) {
      if(choice=="Com"){
      const y3=pigs.filter((i)=>{
        if(i.src!=computer){
          return {...i};
        }
      });
      plteam.map((i)=>{
        
        if(((ppoint+cpoint)%2==0) && i.src==player)
        {
          i.defence+=1;
          
        }
        if(((ppoint+cpoint)%2!=0) && i.src==player){
          i.raid+=1;
         
        }
        return {...i};
      })
      if(birds.length!=10){
    const ele3=bird.find((i,ind)=>{
       if(ind==0){
         return i;
       }
     });
     const m3=bird.filter((i,ind)=>{
       return ind!=0;
     });
     setBirds([...birds,{src:ele3,disable:false}]);
     setBird(m3);
      }
      setPig([...pig,computer]);
      setPigs(y3);
      setPl(pl+1);
    }
    if(choice=="You"){
      const y4=birds.filter((i)=>{
        if(i.src!=player){
          return {...i};
        }
      });
      clteam.map((i)=>{
        if(((ppoint+cpoint)%2==0) && i.src==computer)
        {
          i.defence+=1;
        }
        if(((ppoint+cpoint)%2!=0) && i.src==computer){
          i.raid+=1;
        }
        return {...i};
      })
      if(pigs.length!=10){
    const ele4 =pig.find((i,ind)=>{
       if(ind==0){
         return i;
       }
     });
     const m4=pig.filter((i,ind)=>{
       return ind!=0;
     });
     setPigs([...pigs,{src:ele4}]);
     setPig(m4);
      }
      setBird([...bird,player]);
      setBirds(y4);
      setCo(co+1);
    }
    }
    
    
    },[ch]);
    
  
  const restart=()=>{
   window.location.reload();
  }
  const select=(i)=>{
    
      setCount(count+1);
    setPpoint(i);
    
  }
  const my={
    display:`${((co!=option)  && (birds.length!==0)  && (pl!=option) && (pigs.length!=0))?"block":"none"}`
  }
  const subs=(i)=>{
    const v=team.map((it)=>{
      it.radius=1;
    if(it.src==i.src){
     it.radius=0.3;
    }
    return {...it};
    });
    setImage(i.src);
    setTeam(v);
    
  }
  const backs=()=>{
    const vi=team.map((it)=>{
      it.radius=1;
    return {...it};
    });
    setTeam(vi);
    setToggle(false);
  }
  return(
    <>
      
       <meta name="viewport" content= "width=device-width, user-scalable=no" />
    <div>
    { (co!=option)  && (birds.length!==0)  && (pl!=option) && (pigs.length!=0) && subc==false && toggle==false && disable==false && count>0  && <button id="subs" onClick={()=>setToggle(true)}>Substitution</button>}
      {  disable==false && toggle==true &&  <>
     
      <div id="psubs">
         <h2 id="psubsh">Any Substitution</h2>
        {team.map((i)=>{
        return(
        <img id="pli" style={{opacity:`${i.radius}`}} src={i.src} onClick={()=>subs(i)}/>
        )
      })}
      <button id="ssubs" onClick={backs}>Back</button>
       </div>
      </>}
      
    {choice=="" && <button id="toss" onClick={make}>Toss</button> }
   {choice=="You" && r!=-1  && ((co!=option)  && (birds.length!==0)  && (pl!=option) && (pigs.length!=0) ) && <>
     {(r%2==0)?
   (<h4 id="ret">Raid odd</h4>):
   (<h4 id="fet">Defend even</h4>)}
   </>
   }
    {choice=="Com"  && r!=-1 && ((co!=option)  && (birds.length!==0)  && (pl!=option) && (pigs.length!=0) ) && <> {(r%2==0)?(<h4 id="fet">Defend even</h4>):(<h4 id="ret">Raid odd</h4>)}</>}
      {option !="" && 
      <>
     <div id="player">{ birds.map((i,ind)=>{
return(<> <div id="pc"><img id="pli" src={i.src} onClick={()=>handle(i,ind)} ></img></div></>) })}</div>
    <div id="computer">{ pigs.map((i,ind)=>{
return(<> <div id="cc"><img id="cli" src={i.src} ></img></div></>)} )}</div>
</>}
{player && disable==true &&
<div id="rd">{
buttons.map((i)=>{
  return (
  <button id="but" onClick={()=>select(i)}>{i}</button>
  )
})}
</div>
}
{player && 
<>
  <h1 id="est">{option}</h1>
  <h1 id="play-pt">{pl}</h1>
  <h2 id="ay">{plname}(You)</h2>
  <div id="gp">
  <img src={player} id="ppli" />
  {disable===false && count!=0 && <h4 id="ppo">Power-:{ppoint}</h4>}
  </div>
    <h2 id="omp">{clname}(Com)</h2>  
    <h1 id="comp-pt">{co}</h1>
  <h1 id="head"><strong>VS</strong></h1>
</>  }
  { computer &&

  <>
  
   <div id="gc">
   
  <img src={computer} id="cpli" />
   {disable===false && count!=0 && <h4 id="cpo">Power-:{cpoint}</h4>}
  </div>
</>
}
</div>
{((pl==option) || (pigs.length==0) ) && pl!="" &&
<>
 <h2 id="fet">
   {plname} win!!!
 </h2>
 <button id="restart" onClick={restart}>Restart</button>
 <button id="player-score" onClick={()=>setPback(!pback)}>{pname}(You) Details</button>
 <button id="computer-score" onClick={()=>setCback(!cback)}>{cname}(Com) Details</button>
 </>
}
{((co==option) || (birds.length==0) ) &&
co!="" &&
<>
 <h2 id="fet">
   {clname} win!!!
 </h2>
  <button id="restart" onClick={restart}>Restart</button>
   <button id="player-score" onClick={()=>setPback(!pback)}>{pname}(You) Details</button>
 <button id="computer-score" onClick={()=>setCback(!cback)}>{cname}(Com) Details</button>
 </>
}
{ cback==true && <>
<div id="claer">{ clteam.map((i,ind)=>{
return(<> <div id="rock">
  <img id="eli" src={i.src} ></img>
<p id="craid">Raid-:{i.raid}</p>
<p id="cdef">Defence-:{i.defence}</p>
</div>
</>)} )}</div>
<button id="pback" onClick={()=>setCback(!cback)}>X</button>
</>}
{ pback==true && <>
<div id="claer">{ plteam.map((i,ind)=>{
return(<> <div id="rock">
  <img id="eli" src={i.src} ></img>
<p id="craid">Raid-:{i.raid}</p>
<p id="cdef">Defence-:{i.defence}</p>
</div>
</>)} )}</div>
<button id="pback" onClick={()=>setPback(!pback)}>X</button>
</>}
  </>
  )
      }
export default Angry;