import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import MarketingProduct from '../../pages/MarketingProduct/MarketingProduct';
import ProposedProductsPage from '@src/pages/ProposedProducts/ProposedProductsPage.tsx';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/marketing-products" element={<MarketingProduct />} />
        <Route path="/proposed-products" element={<ProposedProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
