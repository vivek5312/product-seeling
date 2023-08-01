import React, { useState } from 'react';
import { useCart } from './CartContext';

const Input = () => {
  const { addToCart } = useCart();
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState(''); // State to keep track of selected size

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      productName,
      description,
      price,
      size,
    };
    setProductName('');
    setDescription('');
    setPrice('');
    setSize('');

    // Add the item to the cart
    handleAddToCart(data);
  };

  const handleAddToCart = (data) => {
    if (data.productName.trim() === '' || data.description.trim() === '' || data.price <= 0 || data.size === '') {
      alert('Please fill all the fields and select a size.');
      return;
    }

    const newItem = {
      name: data.productName,
      description: data.description,
      price: parseFloat(data.price),
      size: data.size,
    };
    addToCart(newItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>

      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select Size</option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Input;





