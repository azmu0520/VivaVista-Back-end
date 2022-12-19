import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContextProvider from './context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MainContextProvider>
        <Root />
      </MainContextProvider>
    </Router>
  </React.StrictMode>
);
