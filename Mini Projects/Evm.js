import React,{useState,useEffect} from 'react';
import './Evm.css';
const data=[{
  id:0,
  image:"images/Cong.png",
  name:"Cong"
},{
  id:1,
  image:"images/Tmc.png",
  name:"Tmc"
},{
  id:2,
  image:"images/Bjp.png",
  name:"Bjp"
},{
  id:3,
  image:"images/Cpim.png",
  name:"Cpim",
  color:"white"
}];
 export const Evm=()=>{
  const [items,setItems]=useState(data);
const [toggle,setToggle]=useState(false);
const [pic,setPic]=useState("");
const [dis,setDis]=useState(false);
const handle = (i) => {
 const update = items.map((item)=>{
   item.color="white";
    if(item.id==i)
    {
     item.color="red";
     setPic(item.image);
    }
    return {...item}
  });
  setItems(update);
  setToggle(true);
};
const change=()=>{
  setToggle(false);
 setDis(false);
  const u=items.map((ele)=>{
    ele.color="white";
    return {...ele};
  });
  setItems(u);
}
useEffect(()=>{
  if(toggle==true)
  setTimeout(()=>{
    setDis(true);
  },1000)
},[toggle]);
  return(
    <>
      <div className="container">
        <h1 className="name">EVM MACHINE</h1>
      {items.map((item,index)=>{
      return(
      <>
        <div className="box">
        <img src={item.image} className="image"/>
        <div className="light" style={{backgroundColor:item.color}}></div>
        <button className="btn" onClick={()=>{handle(index)}} disabled={toggle}>{item.name}</button>
        </div>
        </>
        )
      })}
      </div>
      { dis && 
      <div className="box-1">
        <h1 className="heading">You vote for:</h1>
        <img src={pic} className="sel_img" />
        <button className="ok" onClick={change}>OK</button>
      </div>
      }
    </>
    )
}
export default  Evm;