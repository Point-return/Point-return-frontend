import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';

import MarketingProductPage from '../../pages/MarketingProductPage/MarketingProductPage';
import ProposedProductsPage from '@src/pages/ProposedProductsPage/ProposedProductsPage.tsx';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MarketingProductPage />} />
        <Route path="/proposed-products" element={<ProposedProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
