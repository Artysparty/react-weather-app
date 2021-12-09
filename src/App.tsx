import React from 'react';
import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/Month-statistics/Month-statistics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';

function App() {
  return (
    <>
    <Popup />
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/month-statistics' element={< MonthStatistics />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
