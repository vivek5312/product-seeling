import React from 'react';
import { useCart } from './CartContext';

const CartDisplay = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cartItems.map((item, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h3>{item.name}</h3>
            <p>Description:{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Size: {item.size}</p>
            <button onClick={() => alert('Item added to cart!')}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;

