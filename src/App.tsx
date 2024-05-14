import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavBar';
import Home from './pages/Home';
import LunapetsProjects from './pages/Lunapets';
import AboutMe from './pages/AboutMe';
import {Route, Routes} from "react-router-dom"
import { FishingProject } from './projects/Fishing';
import { ToastsProject } from './projects/Toasts';
import { BuffsProject } from './projects/Buffs';
import { ConsumablesProject } from './projects/Consumables';
import { TradingProject } from './projects/Trading';

function App() {
  return ( 
  <>
    <TopNavbar />
    <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lunapets" element={<LunapetsProjects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/fishing" element={<FishingProject />} />
        <Route path="/toasts" element={<ToastsProject />} />
        <Route path="/buffs" element={<BuffsProject />} />
        <Route path="/consumables" element={<ConsumablesProject />} />
        <Route path="/trading" element={<TradingProject />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
