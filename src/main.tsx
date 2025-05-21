import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Modal from 'react-modal';
// <--- ІМПОРТ REACT-MODAL

// Встановіть елемент програми для react-modal тут, один раз
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);