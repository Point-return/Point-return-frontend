import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MarketingProductPage from '../../pages/MarketingProductPage/MarketingProductPage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MarketingProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
