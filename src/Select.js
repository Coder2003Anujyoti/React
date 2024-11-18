import React,{useState,useEffect} from 'react';
import './Select.css';
import Rest from './Rest.js';
const options=["images/momo.jpg","images/maggi.jpg","images/puri.jpg","images/corn.jpg","images/chola.jpg","images/allupakoida.jpg"];

const Select=()=>{
  const [data,setData]=useState(options);
const [count,setCount]=useState(0);
const [value,setValue]=useState(false);
const [text,setText]=useState({});
const [col,setCol]=useState("black");
const [toggle,setToggle]=useState(0);
 const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);
 
  useEffect(() => {
    // Fetch exchange rates from a free API (replace with your preferred API)
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
     
    fetch(apiUrl).then(res=>res.json())
      .then(response => {
        setExchangeRates(response.rates);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [fromCurrency])
useEffect(()=>{
  setTimeout(()=>{
    if(count!=data.length-1){
  setCount(count+1);
    }
    if(count==data.length-1){
      setCount(0);
          }
  },1500);
});
const hand=()=>{
  setValue(false);
  setToggle(toggle+1);
}

  return(
    <>
      
     
  { value==false && <button id="btn" onClick={hand} style={{backgroundColor:`${(toggle%2!=0)?"red":col}`}}>VISIT OUR WEBSITE</button>}
   
   {value ==false && 
   <>
      <div id="contaier">{data.map((item,ind)=>{
      return(
      <>
       <div id="contain" style={{
  backgroundColor:`${ind===count?"green":"white"}`
}}></div>
</>
)})}</div>
<div id="containers">{data.map((item,ind)=>{
    
      return(
      <>
    {ind===count &&<img id="images" src={item}/>}
     </>
     )})}</div>
     </>
   }
    <select>{Object.keys(exchangeRates).map((i)=>{
        return(
        <option>{i}</option>
        )
      })}</select>
    </>)}
export default Select;