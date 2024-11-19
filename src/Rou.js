import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
import Evm from './Evm';
const Rou=()=>{
  
    <div>
 <BrowserRouter>
   <Routes>
  <Route path='/' component={<App />}>
  </Route>
  <Route path='/evm' component={<Evm />}
  ></Route>
  </Routes>
  </BrowserRouter>
  </div>
}
export default Rou;