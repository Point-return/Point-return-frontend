import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../../pages/Main/Main';
import MarketingProduct from '../../pages/MarketingProduct/MarketingProduct';

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/marketing-products" element={<MarketingProduct />} />
      </Routes>
    </div>
  );
}

export default App;
