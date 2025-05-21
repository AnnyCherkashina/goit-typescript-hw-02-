import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import Modal from 'react-modal'; // <--- ДОДАНО: Імпорт Modal

// <--- ВИПРАВЛЕНО: Modal.setAppElement викликається тут ОДИН РАЗ
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);