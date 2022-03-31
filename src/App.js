import React from 'react';
import Fibato from './fibato';
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'


const App = () => {
    return ( 
      <BrowserRouter>
        <Fibato/>
         <ToastContainer/>
        </BrowserRouter>
   
     );
}
 
export default App;