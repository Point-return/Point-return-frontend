import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@gravity-ui/uikit';

import MarketingProductPage from '../../pages/MarketingProductPage/MarketingProductPage';
import ProposedProductsPage from '@src/pages/ProposedProductsPage/ProposedProductsPage.tsx';
import './App.scss';
import Header from '../Header/Header';
import { useAppSelector } from '@src/hooks/redux';
import { darkTheme, lightTheme } from '@src/utils/consts';

function App() {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<MarketingProductPage />} />
          <Route
            path="/dealer-product/:id"
            element={<ProposedProductsPage />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
