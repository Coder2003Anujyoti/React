import React, {  useState } from "react";
const Range=()=>{
    const [value,setValue] = useState(0)
    return(
        <>
    <input type="range" max="100" min="0"   value={value} onChange={(e)=>{setValue(e.target.value)}}/>
    <h1>{value}</h1>
      </>
      
    );
}
export default Range;