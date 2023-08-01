import React from 'react';
import Header from './components/Header';
import Input from './components/Input';
import CartDisplay from './components/CartDispaly';
import { CartProvider } from './components/CartContext';

const App = () => {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <Input />
        <CartDisplay/>
      </CartProvider>
    </div>
  );
};

export default App;

