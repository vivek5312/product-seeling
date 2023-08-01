import React, { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import { CartProvider } from './components/CartContext';

const App = () => {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <div className="container">
      <CartProvider>
        {cartShown && <Modal onHideCart={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
      </CartProvider>
    </div>
  );
};

export default App;

