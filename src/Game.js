import React,{useState,useEffect} from 'react';
import Item from './Item.js';
import './Game.css';
const Game=()=>{
  const [item,setItem]=useState(Item);
  const [name,setName]=useState([]);
  const [count,setCount]=useState(0);
  const [move,setMove]=useState(0);
  const [winner,setWinner]=useState(0);
  const [wc,setWc]=useState(0);
  const change=(i)=>{
    const update=item.map((item)=>{
      if(item.id===i){
      item.toggle=true;
      item.disable=true;
      setName([...name,item.name]);
      if(count%2!=0){
        setMove(move+1);
      }
      }
      return {...item};
    });
    setItem(update);
    setCount(count+1);
  };
  useEffect(()=>{
    if(count%2==0)
    { 
      if(name[0]!=name[1])
      {
        const upm=item.map((item)=>{
          if(item.toggle==false){
        item.disable=true;
          }
        return {...item};
      });
      setItem(upm);
      const upd=item.map((item)=>{
        if(item.toggle==false){
        item.disable=false;
        }
        if(item.name==name[0] || item.name==name[1]){
        item.disable=false;
       item.toggle=false;
        }
        return {...item};
      });
    setTimeout(()=>{
      setItem(upd);
     setName([]);
    },200);
      }
      if(name[0]==name[1])
      {
        const upda=item.map((item)=>{
        if(item.name==name[0] || item.name==name[1]){
        setWc(wc+1);
       item.disable=true;
        }
        return {...item};
        });
        setItem(upda);
        setName([]);
        
      }
    }
    
    
  },[count])
  return(
    <>
      <h1 id="mv">Move count-:{move}</h1>
  <div className="box">
      <div className="container">
  { item.map((item)=>{
  return(
  <>
<div key={item.id}>
  <button id="btn" disabled={item.disable} onClick={()=>{change(item.id)}}>
    {item.toggle?(
<img src={item.image} className="image"/>):item.text}
  </button>
  </div>
  </>
    );
  })}
  </div>
  </div>
{ wc==4 && ((
(move<=10) &&
<h1 id="pf">Outstanding</h1>
) || (
(move>10 && move<=20) &&
<h1 id="pf">Average</h1>
)||(
(move>20) &&
<h1 id="pf">Bad</h1>
))
}
  </>
  )
};
export default Game;