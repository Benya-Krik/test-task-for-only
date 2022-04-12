import React from 'react';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';

const AppWrapper = styled.div`
width: 100vw;
height: 100vh;

& main {
  width: 100%;
  height: 100%;
}
`

export function App() {
  return (
    <AppWrapper>
      <Header></Header>
      <main>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </main>
    </AppWrapper>
  );
}

export default App;
