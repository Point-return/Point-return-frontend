import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@gravity-ui/uikit';
import App from './App.tsx';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme="dark">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
