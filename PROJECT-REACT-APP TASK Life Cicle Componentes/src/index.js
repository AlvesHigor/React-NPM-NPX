import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppClock from './AppClock';
import AppClockFunction from './AppClockFunction'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppClock />
    <AppClockFunction />
  </React.StrictMode>
);


reportWebVitals();
