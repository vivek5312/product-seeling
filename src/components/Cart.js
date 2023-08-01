import React from 'react';
import { useCart } from './CartContext';

const Cart = ({ onClose }) => {
  const { cartItems } = useCart(); // Receive cartItems from the CartContext

  return (
    <div>
      <h2>Cart</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartItems.map((item, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{item.name}</h3>
            <p>Description: {item.description}</p>
            <p>Price: {item.price}</p>
            <p>Size: {item.size}</p>
          </div>
        ))}
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Cart;


