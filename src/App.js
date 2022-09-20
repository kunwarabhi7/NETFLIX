import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/login';
import Account from './pages/Account';
import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {
  return (
    <>
<NavBar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<SignUp  />} />
  <Route path='/account' element={<ProtectedRoutes><Account /></ProtectedRoutes>} />
  
</Routes>
    </>
  );
}

export default App;
