import React from 'react';
import Input from './Input';

const Header = (props) => {
  return (
    <div>
      <div style={{ display: 'flex', fontSize: '25px', justifyContent: 'center', marginRight: '100px', marginTop: '25px' }}>
        <button onClick={props.onShowCart}>Cart</button>
      </div>
      <h1>T-Shirt Selling App</h1>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Header;

