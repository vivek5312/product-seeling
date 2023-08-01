import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Check if the item already exists in the cart based on its name and size
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name && cartItem.size === item.size
    );

    if (existingItem) {
      // If the item already exists, update the quantity for the specific size
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.name === item.name && cartItem.size === item.size
          ? { ...cartItem, quantity: { ...cartItem.quantity, [item.size]: cartItem.quantity[item.size] + 1 } }
          : cartItem
      );
      setCartItems(updatedItems);
    } else {
      // If the item does not exist, add it to the cart
      setCartItems([...cartItems, item]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
