import React,{useState} from 'react';
const lists=[{
  id:1,
  name:"Toggle1",
  check:false
},{
  id:2,
  name:"Toggle2",
  check:false
}];
const Check=()=>{
  const [items,setItems]=useState(lists);
 const handleclick=(id)=>{
   const del=items.map((item,index)=>{
    item.check=false;
     if(item.check==true && index==id)
     {
    item.check=false;
  
     }
   else  if( index==id && item.check==false){
       item.check=true;
     }
     
       return {...item};
   });
   setItems(del);
 };
  return(
    <>
    {items.map((item,index)=>{
    return(
      <div key={item.id}>
      <input type="checkbox"
        checked={item.check}
        onChange={()=>handleclick(index)}
         />
      {item.name}
      </div>
      )
    })}
    </>
    )
}
export default Check;
