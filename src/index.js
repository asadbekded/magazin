import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import App from './App';
import { AuthProvider } from './context/auth-context';
import { UserProvider } from './context/user-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthProvider>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </AuthProvider>
  </BrowserRouter>
);
