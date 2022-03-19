// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Post from './pages/Post';

/* Constants */ 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/post" element={ <Post /> } />
          <Route path="*" element={ <NoPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
