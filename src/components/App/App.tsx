import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@gravity-ui/uikit';

import MarketingProductPage from '@src/pages/MarketingProductPage/MarketingProductPage';
import ProposedProductsPage from '@src/pages/ProposedProductsPage/ProposedProductsPage.tsx';
import './App.scss';
import Header from '@components/Header/Header';
import { useAppSelector } from '@src/hooks/redux';
import { darkTheme, lightTheme } from '@src/utils/consts';
import AuthPage from '@src/pages/AuthPage/AuthPage';
import ProtectedRouteElement from '@components/ProtectedRoute/ProtectedRoute';

function App() {
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="app">
        <Header />
        <Routes>
          <Route element={<ProtectedRouteElement />}>
            <Route path="/" element={<MarketingProductPage />} />
          </Route>
          <Route element={<ProtectedRouteElement />}>
            <Route
              path="/dealer-product/:id"
              element={<ProposedProductsPage />}
            />
          </Route>
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
