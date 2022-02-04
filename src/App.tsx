import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      {/* <Suspense fallback={<Main />}> */}
        <Header/>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
