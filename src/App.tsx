import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutme from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import TabResume from './components/try';
import Intro from './components/welcome';

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <>
      <Suspense fallback={<Aboutme />}>
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/about" element={<Aboutme/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<TabResume/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
