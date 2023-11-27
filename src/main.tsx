import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@gravity-ui/uikit';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App.tsx';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme="dark">
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
);
