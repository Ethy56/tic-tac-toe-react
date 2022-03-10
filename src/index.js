import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <div className="w-[100vw] h-[100vh] bg-slate-800">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);