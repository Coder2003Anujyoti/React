import React,{useState} from 'react';

const Prac=()=>{
  const[value,setValue]=useState("");
  const[items,setItems]=useState([]);
  const[count,setCount]=useState(0);
  const[index,setIndex]=useState(0);
  const[toggle,setToggle]=useState(false);
  const add=()=>{
    if(value==='')
    {
      alert("Input Required");
    }
    else if(toggle===true)
    {
      const update=items.map((item)=>{
        if(item.id===index){
        item.value=value;
        item.edit+=1;
        }
        return {...item};
      })
      setItems([...items]);
      setValue("");
      setToggle(false);
    }
    else
    {
      const list={
        id:count,
        value:value,
        edit:0
      };
      setCount(count+1);
      setValue("");
      setItems([...items,list]);
    }
  }
  const edit=(i)=>{
    const data=items.find((item)=>{
      if(item.id===i)
      return item;
    });
    setValue(data.value);
    setIndex(i);
    setToggle(true);
  }
  return(
    <>
    <div id="container">
      <h1>Todo List</h1>
    <input type="text" value={value} onChange={(e)=>{setValue(e.target
    .value)}} />
   <button onClick={add}>{toggle?"Edit":"Add"}</button>
    </div>
  {items.length>0 &&
    items.map((item)=>{
      return(
      <>
     <div>{item.value}</div>
     <button onClick={()=>{edit(item.id) }} >Edit</button>
     <div>{item.edit}</div>
     </>
      )
    })
    
  }
    </>
    )
}
export default Prac;