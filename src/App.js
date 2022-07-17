import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './features/auth/page/Login';
import SignUp from './features/auth/page/Signup';
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
