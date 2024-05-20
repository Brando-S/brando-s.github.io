import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavBar';
import Home from './pages/Home';
import LunapetsProjects from './pages/Lunapets';
import LunarisRsps from './pages/Lunaris';
import {Route, Routes} from "react-router-dom"
import { FishingProject } from './projects/Fishing';
import { ToastsProject } from './projects/Toasts';
import { BuffsProject } from './projects/Buffs';
import { ConsumablesProject } from './projects/Consumables';
import { TradingProject } from './projects/Trading';
import { PetEmotionsProject } from './projects/PetEmotions';
import Minecraft from './pages/Minecraft';
import GaardTech from './pages/GaardTech';
import GeneralInspection from './pages/GeneralInspection';
import TopNavigation from './components/TopNavigation';

function App() {
  return ( 
  <>
    <TopNavigation />
    <div className='content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lunapets" element={<LunapetsProjects />} />
        <Route path="/lunaris" element={<LunarisRsps />} />
        <Route path="/fishing" element={<FishingProject />} />
        <Route path="/toasts" element={<ToastsProject />} />
        <Route path="/buffs" element={<BuffsProject />} />
        <Route path="/consumables" element={<ConsumablesProject />} />
        <Route path="/trading" element={<TradingProject />} />
        <Route path="/faceEmotes" element={<PetEmotionsProject />} />
        <Route path="/minecraft" element={<Minecraft />} />
        <Route path="/gaard" element={<GaardTech />} />
        <Route path="/gi" element={<GeneralInspection />} />
      </Routes>
    </div>
  </>
  );
}

export default App;
