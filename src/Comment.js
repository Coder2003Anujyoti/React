import React, {useState,useEffect} from 'react';
import Aselect from './Aselect.js'
import './Comment.css';
const list=()=>{
  const val=localStorage.getItem('items');
  if(val){
    return JSON.parse(val);
  }
  else{
    return [];
  }
}
const Comment=({filters})=>{
  const [text,setText]=useState("");
  const [item,setItem]=useState(list);
  const [count,setCount]=useState(0);
  const [edit,setEdit]=useState(false);
  const [index,setIndex]=useState(-1);
  const [show,setShow]=useState(false);
  const [name,setName]=useState("");
  const [use,setUse]=useState(false);
   const add=()=>{
    if(text.trim()!="" && edit==false && text.length<=50){
      const data={
        id:count,
        value:text,
        toggle:false,
        show:false,
        color:"",
        reply:[]
      };
      setItem([...item,data]);
      setText("");
      setCount(count+1);
    }
    if(text.length>50){
      alert("Word Limit exceeded");
      setText("");
    }
    
  }
  useEffect(()=>{
    localStorage.setItem('items',JSON.stringify(item));
  },[item]);
  const change=(ind)=>{
    const update=item.map((it,index)=>{
      if(ind===index && it.toggle==true){
        it.toggle=false;
      }
     else if(ind===index && it.toggle==false){
        it.toggle=true;
      }
      return {...it};
    });
    setItem(update);
  }
  const resp=(im,i)=>{
    const ind=item.map((it,index)=>{
     it.color="";
      if(i===index){
      it.color="pink";
        setIndex(i);

      return it;
      }
  });
  setText("");
  setName("Replied to Comment-: "+im.value);
  setEdit(true);
  }
  const rep=()=>{
    
    if(text.trim()!=''){
    const u=item.map((it,ind)=>{
      if(index==ind){
        it.color="";
        it.reply=[...it.reply,{value:text,toggle:false}];
}
      return {...it};
    });
    setItem(u);
    setText("");
    setName("");
    setEdit(false);
    }
    
    
  }
  const sho=(i)=>{
    const up=item.map((it,ind)=>{
      if(i==ind){
        it.show=!(it.show);
      }
      return {...it};
    });
    setItem(up);
  }
  const resl=(a,b)=>{
    const ul=item.map((it,ind)=>{
      if(a==ind){
        it.reply.map((item,index)=>{
          if(index==b){
            item.toggle=!(item.toggle);
          }
          return {...item};
        })
      }
      return {...it};
    });
    setItem(ul);
  }
const modify=()=>{
  setEdit(false);
  setName("");
  setText("");
  setIndex(-1);
}
  const del=(i)=>{
    const k=item.filter((it,ind)=>{
      return ind!=i
    });
    setItem(k);
  }
  const delr=(a,b)=>{
    const gfg=item.map((it,ind)=>{
      if(a==ind){
       const y=it.reply.filter((im,ix)=>{
          if(ix!=b){
          return {...im};
          }
        });
        it.reply=y;
      }
    
      return {...it};
    });
   setItem(gfg);
  }
   
  return(
    <>
  <h2 id="comhead">Comments Section</h2>
     <input type="text" id="inp"placeholder={edit===false?"Add Comments":` ${name}`} value={text} onChange={(e)=>setText(e.target.value)} />
      <button id="bnadd" onClick={edit==false?add:rep} >{edit===false?"Add":"Reply"}</button>
    {
    edit==true &&  <p id="h1">{name}</p>}

         {edit===true && 
<button onClick={modify} id="mvp">C</button>}
     <div id="data">
        {item.map((i,ind)=>{
          return(
          <>
       <h1>----------------------------</h1>
            <div id="val">{i.value}</div>
        {i.toggle===true?(<button id="dislike" onClick={()=>change(ind)}>Dislike</button>):(<button id="like" onClick={()=>change(ind)}>Like</button>)}
        <button id="reply" onClick={()=>resp(i,ind)}
        >Reply-:{i.reply.length}</button>
        <button id="show" onClick={()=>sho(ind)}>{i.show==false?"Show Replies":"Hide Replies"}</button>
        <button id="delete" onClick={()=>del(ind)}>Delete</button>
        {i.show === true && i.reply.map((it,index)=>{
          return (<>
            <h1></h1>
             <div id="vals">{it.value}</div>
          <button id="likes" onClick={()=>resl(ind,index)}>{it.toggle==true?"Dislike":"Like"}</button>
           <button id="replys" onClick={()=>resp(it,ind)}
        >Reply</button>
        <button id="deletes" onClick={()=>delr(ind,index)}>Delete</button>
      
              </>
              )
        })}
          </>
          
          )
        })}
      </div>
     <button id="pback2" onClick={filters}>X</button>
    </>
    )
}
export default Comment;