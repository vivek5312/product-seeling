import React, { useState } from 'react';
import { useCart } from './CartContext';

const Input = () => {
  const { addToCart } = useCart();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState('');

  const handleAddToCart = () => {
    if (name.trim() === '' || description.trim() === '' || price <= 0 || size === '') {
      alert('Please fill all the fields.');
      return;
    }

    const newItem = {
      name: name,
      description: description,
      price: parseFloat(price),
      size: size,
    };

    addToCart(newItem);
    setName('');
    setDescription('');
    setPrice(0);
    setSize('');
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div>
          <label htmlFor="size">Size:</label>
          <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="large">Large</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </div>

        <button type="button" onClick={handleAddToCart}>Submit</button>
      </form>
    </div>
  );
};

export default Input;




