import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // ✅ Must be imported
import App from './App';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ✅ Wrap your App inside BrowserRouter */}
    <CartProvider>
       <App />
    </CartProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);