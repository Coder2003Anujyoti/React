import React,{useState,useEffect} from 'react';
import './App.css';

const App=()=>{
const [player,setPlayer]=useState("");
const [computer,setComputer]=useState("");
const [playerscore,setPlayerscore]=useState(0);
const [computerscore,setComputerscore]=useState(0);
const [winner,setWinner]=useState("");
const [count,setCount]=useState(0);
const a=["Rock","Paper","Scissors"];
const check=(value)=>{
  setPlayer(value);
const opt=a[Math.floor(Math.random()*3)];
setComputer(opt);
setCount(count+1);
};
useEffect(()=>{
  if((player==="Rock" && computer==="Scissors")||(player==="Paper" && computer==="Rock")||(player==="Scissors" && computer==="Paper"))
   {
     setWinner("Player win");
     setPlayerscore(playerscore+1);
   }
 
if((player==="Rock" && computer==="Rock")||(player==="Paper" && computer==="Paper")||(player==="Scissors" && computer==="Scissors"))
   {
    setWinner("Tied");
    setPlayerscore(playerscore);
   setComputerscore(computerscore);
   }
   if((player==="Scissors" && computer==="Rock")||(player==="Rock" && computer==="Paper")||(player==="Paper" && computer==="Scissors"))
   {
     setWinner("Computer win");
     setComputerscore(computerscore+1);
   }
},[count]);
  return(
    <>
  <div className="container">
    <button className="rock-btn" onClick={()=>{ check("Rock")
    }}>Rock</button>
     <button className="paper-btn" onClick={()=>{ check("Paper")
     }}>Paper</button> 
     <button className="scissors-btn" onClick={()=>{check("Scissors")
     }}>Scissors</button>
  <p className="yt">Player throw:-{player}</p>
    <p className="ct">Computer throw:-{computer}</p>
    <p className="player-score">Player:{playerscore}</p>
    <p className="computer-score">Computer:{computerscore}</p>
    <p  className="result">Result-:{winner}</p>
  </div>
    </>
    )
}
export default App;