import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Random from './pages/Random';
import SpotDetail from './pages/SpotDetail';
import SpotList from './pages/SpotList';
import FilteredSpotRoulette from './pages/FilteredSpotRoulette';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/places/:id" element={<SpotDetail />} />
        <Route path="/places" element={<SpotList />} />
        <Route path="/places/FilteredSpotRoulette" element={<FilteredSpotRoulette />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);