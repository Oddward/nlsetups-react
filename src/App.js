// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';

/* Constants */ 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/home" element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
