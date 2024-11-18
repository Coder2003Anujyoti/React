import React,{useState} from 'react';
const countries=[{name:"India",cities:["Delhi","Kolkata"]},{name:"Pakistan",cities:["Lahore","Islamabad"]}];
const Practice=()=>{
const [country,setCountry]=useState
(countries);
const [index,setIndex]=useState("");
return(
  <>
  <select onChange={(e)=>setIndex(e.target.value)}>{country.map((it,ind)=>{
      return <option>{it.name}</option>
    })}</select>
<select>{country.map((it,ind)=>{if(it.name===index){return( <>
      {it.cities.map((i)=>{return <option>{i}</option> })}</>
      )
  }
  })}
</select>
  </>
  )
}
export default Practice;