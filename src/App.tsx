import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutme from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';
import Intro from './components/welcome';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <>
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Aboutme />}>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/about" element={<Aboutme/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </>
  );
}

export default App;
