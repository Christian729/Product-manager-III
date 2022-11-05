import {BrowserRouter,Routes, Route} from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';
import Main from './view/Main';
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
