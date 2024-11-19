import React,{useState} from 'react';
import './Calculator.css';
const Calculator=()=>{
  const [item,setItem]=useState("");
  const add=(num)=>{
  setItem(item+num);
  }
  return(
    <>
    <div className="calculator">
      <div className="inp">
        <h1>{item}</h1>
    </div>
    <div className="buttons">
<button onClick={()=>add(0)}>0</button>
<button onClick={()=>add(1)}>1</button>
<button onClick={()=>add(2)}>2</button>
<button onClick={()=>add(3)}>3</button>
<button onClick={()=>add(4)}>4</button>
<button onClick={()=>add(5)}>5</button>
<button onClick={()=>add(6)}>6</button>
<button onClick={()=>add(7)}>7</button>
<button onClick={()=>add(8)}>8</button>
<button onClick={()=>add(9)}>9</button>
<button onClick={()=>add("+")}>+</button>
<button onClick={()=>add("-")}>-</button>
<button onClick={()=>add("*")}>×</button>
<button onClick={()=>add("/")}>÷</button>
<button onClick={()=>add("**(")}>^</button>
<button onClick={()=>add("(")}>(</button>
<button onClick={()=>add(")")}>)</button>
<button onClick={()=>setItem("")}>AC</button>

<button onClick={()=>setItem(item.slice(0,-1))}>C</button>
<button onClick={()=>
{
 try{
const result=eval(item).toString();
 if(result=="NaN")
 { throw "";
   setItem("");
 }
 if(result!="NaN")
{ setItem(result);
 }
 }
  catch(error)
  {
    alert("Error Operation");
    setItem("");
  }
}
}>=</button>
    </div>
    </div>
    </>
    )
}
export default Calculator;
