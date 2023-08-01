import React from 'react';
import Cart from './Cart';

const Modal = (props) => {
  return (
    <div>
      <Cart />
      <button onClick={props.onHideCart}>Close</button>
      <button>Order</button>
    </div>
  );
};

export default Modal;

