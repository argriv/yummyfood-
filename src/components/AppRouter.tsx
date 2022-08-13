import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../pages/Cart';
import Start from '../pages/Home';
import Profil from '../pages/Profil';
import ErrorPage from '../pages/Error';
import ProtecdetRoute from './ProtecdetRoute';

const AppRouter: React.FC = () => {

      return (
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='/cart' element={<Cart/>}/>
              <Route element={<ProtecdetRoute/>}>
                  <Route path='/profil' element={<Profil/>}/>
              </Route> 
            <Route path="*" element={<ErrorPage/>}/> 
        </Routes>
  )
}
export default AppRouter;