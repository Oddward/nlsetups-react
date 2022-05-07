// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { auth } from './Firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './pages/Profile';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Post from './pages/Post';
import Signin from './pages/Signin';

/* Constants */ 


function App() {
  // const [ user ] = useAuthState( auth )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/signin" element={ <Signin /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/post" element={ <Post /> } />
          <Route path="*" element={ <NoPage /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
