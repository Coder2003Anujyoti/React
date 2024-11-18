import React,{useState} from 'react';
const Diwali=()=>{
  const [text,setText]=useState("");
  const [item,setItem]=useState([]);
  const [count,setCount]=useState(1);
  const [con,setCon]=useState(0);
  const add=()=>{
    if(text.trim()!=""){
      const value={
      name:text,
      gift:"No gifts"
      };
   setText("");
   setItem([...item,value]);
  }
  }

  const addg=()=>{
    var sign=0;
    let val="";
    const k=item.map((it,i,a)=>{
      if(it.gift=="No gifts"){
      let arr=["Diwali","Crackers","Sweets","Clothes"];
      it.gift=arr[i%4];
      sign=0;
    }else{sign=1;}return {...it};});if(sign==0){ 
    setItem(k);}else
    { alert("Already gifts are assigned");
    }
  }
  const toggle=()=>{
    var sin=0;
    const k=item.map((it,i,a)=>{
      if(it.gift!="No gifts"){
      let arr=["Diwali","Crackers","Sweets","Clothes"];
    let r=Math.floor(Math.random()*4);
    if(it.gift!=arr[r]){
      it.gift=arr[r];
    }
  else{
     it.gift=arr[(r+1)%4];
  }
        sin=0;
      }
      else{sin=1;} return {...it};
  });if(sin==0){
    
  setItem(k);}
  else{alert("No gifts are assigned");}
  }
  const reset=()=>{const k=item.map((it)=>{it.gift="No gifts";return {...it};});setItem(k);}
  const remove=(ind)=>{
    const k=item.filter((it,index)=>{
    return index!=ind; });setItem(k);}
  
  
  return(
    <>
    
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <button onClick={add}>Gift</button>
      <ul>
      {item.map((it,index)=>{
        
        return (
        <>
          <li>
          <h4>{it.name+"------"+it.gift}</h4>
          <button onClick={()=>remove(index)}>Remove</button>
          </li>
        </>
        
        )
      })}
      </ul>
      <button onClick={addg}>Add Gifts</button>
      <button onClick={toggle}>Toggle Gifts</button>
      <button onClick={reset}>Reset</button>
    </>
    )
}
export default Diwali;
