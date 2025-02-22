import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './ComingSoon.css';
import './Header.css';
import './pages/Home.css';
import './pages/About.css'; 
import './pages/Events.css';
import './pages/Contact.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);