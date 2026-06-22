import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Site1 from './Site1.jsx';
import Site2 from './Site2.jsx';
import Site3 from './Site3.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/site-1" element={<Site1 />} />
        <Route path="/site-2" element={<Site2 />} />
        <Route path="/site-3" element={<Site3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
