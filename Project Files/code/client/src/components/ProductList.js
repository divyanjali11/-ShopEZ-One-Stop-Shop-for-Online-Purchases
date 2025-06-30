import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './contexts/CartContext'; // ✅

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // ✅

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {products.map((product, index) => (
            <div key={index} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              width: '200px',
              textAlign: 'center'
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button> {/* ✅ */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;