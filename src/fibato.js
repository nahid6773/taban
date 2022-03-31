import React from 'react';
import Mainlayout from './component/layout/Mainlayout';
import { Routes, Route } from 'react-router-dom'
import Hotels from './component/hotels/hotel';
import Allhotels from './component/hotels/allhotels';
import Login from './component/Login/LOgin';
import Register from './component/register/register.jsx'
import Offer from './component/offer/offer';

const Fibato = (props) => {
    return (
        <Mainlayout>
            <Routes>
                <Route path='/' element={<Hotels />} />
                <Route path='/allhotels' element={<Allhotels/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/offer' element={<Offer/>} />

            </Routes>
        </Mainlayout>
    );
}

export default Fibato;