import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MarketingProductPage from '../../pages/MarketingProductPage/MarketingProductPage';
import ProposedProductsPage from '@src/pages/ProposedProductsPage/ProposedProductsPage.tsx';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MarketingProductPage />} />
        <Route path="/dealer-product/:id" element={<ProposedProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
