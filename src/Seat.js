import React,{useState} from 'react';
import Data from './Data.js';
import './Seat.css';
const Seat=()=>{
  const [seat,setSeat]=useState(Data);
  const [count,setCount]=useState(0);
  const [dat,setDat]=useState([]);
  const [rt,setRt]=useState(false);
  
  const handle=(r,c)=>{
    
    if(count<5){
  
      setCount(count+1);
      const val={
        row:r+1,
        col:c+1
      };
    const up= seat.map((item,ind)=>{
      
        item.map((it,i)=>{
            if(i===c && r==ind){
            it.color="red";
            it.disable=true;
            setDat([...dat,("You booked Seat-: "+val.row+"  row "+val.col+" column ")]);
            }
            return {...it};
            
          });
          return [...item];
      })
      
      
    }
  if(count>=5){
    alert("No further seats can be booked");
  }
  };
  const remove=()=>{
    setCount(0);
    setDat([]);
    setRt(false);
    seat.map((item,ind)=>{
      
        item.map((it,i)=>{
            it.color="black";
            it.disable=false;
            return {...it};
            
          });
          return [...item];
      })
  }
  
  

  return(
    <>
      
      <h1 id="arrange">Seating Arrangements</h1>
      { seat.map((item,row)=>{
      return(
      <div className="seat_id">
     { item.map((i,col)=>{
        return <button className="btn" style={{backgroundColor:i.color }} onClick={()=>handle(row,col)} disabled={i.disable}>{i.id}</button>
      })}
      </div> )})}
      {count>0 &&
      <button id="cnfrm" onClick={()=>setRt(!rt)}>{((rt===false)?"Show Bookings":"Hide Bookings")}</button>}
      {count<=5 && count>0 && rt==true && <div id="res"><p id="ct">{dat}</p>
      </div>}
     {count>0 && <button id="rmv" onClick={remove}>Remove All</button>}
<h3 id="avl">Available Seats:{5-count}</h3>
    </>
    )
}
export default Seat;