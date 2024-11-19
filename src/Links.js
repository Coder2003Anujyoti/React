import React,{useState,useEffect} from 'react';

const Links=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/",{
      method:"GET"
    }).then((res)=>res.json()).then((res)=> { 
      setData(res);});
  },[]);
  return(
   <>
      {
      data
      }
    </>
    )
}
export default Links;