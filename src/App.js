import React,{useState,useEffect} from 'react';
import './App.css';
const App=()=>{
const [items,setItems]=useState(["","","","","","","","",""]);
const [lock,setLock]=useState(["","","","","","","","",""]);
const [result,setResult]=useState("");
const [count,setCount]=useState(0);
const [toggle,setToggle]=useState(false);
  const increase=(i)=>{
    if(count<9 && !result){
    setCount(count+1);
    }
    if(toggle==false && lock[i]=="" && !result && count<9){
    setToggle(true);
  items[i]="X";
  lock[i]="true";
    }
    else if(toggle==true && lock[i]=="" && !result && count<9){
    setToggle(false);
    items[i]="O";
    lock[i]="true";
    }
    
  };
  useEffect(()=>{
   const checkRow=()=>{
     let ans=false;
     for(let i=0;i<9;i+=3)
     { if((items[i]==items[i+1])&&(items[i]==items[i+2])&& items[i]!=="")
      ans=true;
     }
     return ans;
   };
   const checkCol = () => {
     let ans = false;
    for (let i = 0; i < 3; i++) {
   if( items[i] === items[i + 3] &&
    items[i] === items[i + 6] && items[i] !== "")
    ans=true;
   }
   return ans;
 };
 const checkDiagonal = () => {
let ans=false;
if((items[0] === items[4] && items[0] ===
items[8] && items[0] !== "") || (items[2] ===items[4] && items[2] === items[6] && items[2] !== ""))
  { ans=true;
  }
     return ans;
   };
 const checkWin = () => {
   let ans=false;
  if(checkRow() || checkCol() || checkDiagonal())
  {
    ans=true;
  }
  return ans;
 };
 if (checkWin()) {
setResult(toggle?"X Wins!!":"O Wins!!");
}
else if(count==9 && !result)
{
  setResult("Tied!!");
}
  },[count]);
  return(
    <>
    <div className="box">
 {(count<=9 && !result)?(<p className="text">Turn-:{toggle ?"O turn":"X turn"}</p>):
 (<p className="text">Result-:{result}</p>)}
    <div className="container">
   <button onClick={()=>increase(0)}>{items[0]}</button>
    <button onClick={()=>increase(1)}>{items[1]}</button>
   <button onClick={()=>increase(2)}>{items[2]}</button>
    <button onClick={()=>increase(3)}>{items[3]}</button>
     <button onClick={()=>increase(4)}>{items[4]}</button>
    <button onClick={()=>increase(5)}>{items[5]}</button>
     <button onClick={()=>increase(6)}>{items[6]}</button>
     <button onClick={()=>increase(7)}>{items[7]}</button>
  <button onClick={()=>increase(8)}>{items[8]}</button>
   </div>
   </div>
    </>
    );
};
export default App;