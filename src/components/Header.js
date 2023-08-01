import React,{useState} from 'react';
import { useCart } from './CartContext';
import Cart from './Cart';

const Header = () => {
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false); // State to control cart visibility

  const handleCartButtonClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <h1>My Online Store</h1>
      <p>Cart Items: {cartItems.length}</p>
      {/* Render the cart button */}
      <button onClick={handleCartButtonClick}>Cart</button>

      {/* Conditional rendering of the cart component */}
      {showCart && <Cart cartItems={cartItems} onClose={handleCloseCart} />}
    </div>
  );
};

export default Header;

