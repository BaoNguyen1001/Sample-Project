import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './features/auth/page/login';
import SignUp from './features/auth/page/signup/';
import Admin from './features/layout/Admin';
function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
