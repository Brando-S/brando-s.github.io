import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import {Route, Routes} from "react-router-dom"
import { FishingProject } from './projects/Fishing';
import { ToastsProject } from './projects/Toasts';
import { BuffsProject } from './projects/Buffs';
import { ConsumablesProject } from './projects/Consumables';

function App() {
  return ( 
  <>
    <TopNavbar />
    <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/fishing" element={<FishingProject />} />
        <Route path="/toasts" element={<ToastsProject />} />
        <Route path="/buffs" element={<BuffsProject />} />
        <Route path="/consumables" element={<ConsumablesProject />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
