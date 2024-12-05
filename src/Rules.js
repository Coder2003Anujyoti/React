import React,{useState,useEffect} from 'react';
import Birds from "./Birds.js";
import Pig from "./Pig.js";
import Ben from "./Ben.js";
import Pok from "./Pok.js";
import Power from "./Power.js";
import "./Angries.css";
import Angry from './Angry.js';
import Sel from './Sel.js';
import Aselect from './Aselect.js';
const Rules=({setRule})=>{
  return(<>
    
    <h2 id="kab">Rules of Kabaddi</h2>
  <ol id="list">
    <li>Select the Maximum Points,Player team and Computer team.</li>
    <li>Select 10 players out of 12 players from Player team and the remaining 2 players are substitution options.</li>
    <li>Toss first and the upper part represents player team while the lower part represents computer team
     .</li>
     <li>Select any 1 player from the above list.After selecting ,option shows whether you have to raid or defence and the buttons appear on your screen.</li>
     <li>For a successful raid you choose a number such that the sum of your choice and computer choice gives odd value and For a successful defence you choose a number such that the sum of your and computer choice gives even value.</li>
     <li>For a successful raid/defence your/computer team will be awarded with 1 point and also revive a player who become out due to unsucessful attempt of raid/defence.</li>
     <li>For an unsuccessful raid/defence,no points are awarded to your/computer team as well as that particular player got out from the playing field and waiting for the other players to revive him after attempting successful raid/defence.</li>
     <li>You/computer can also substitute any 1 player with the player from the substitution bench but for only one time.Substitution is possible after the 1st raid/defence attempt by your/computer team and before winning the match by your/computer team.</li>
     <li>For doing Substitution,you need to click on the picture of player in substitution bench and then click on the player which you want to replace with that.</li>
     <li>You/computer win the match either by achieving the maximum points or out all the players of opposition team. </li>
    
     <li>After the match is over you see the raid and defence points earned by each players of your/computer team.</li>
  </ol>
  <button id="pback2" onClick={()=>setRule(false)}>X</button>
  </>
    )
}
export default Rules;