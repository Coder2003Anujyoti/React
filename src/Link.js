import React,{useState,useEffect} from 'react';
const Link=()=>{
  const [count,setCount]=useState(0);
  useEffect(()=>{
setInterval(()=>{setCount(count+1)},1000)
},[count]);
  return(
    <>
      <h1>Hrllo</h1>
    <div>{count}</div>
    </>
    )
}
export default Link;