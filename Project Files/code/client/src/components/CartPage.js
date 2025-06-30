// src/CartPage.js
import React, { useContext, useState } from 'react';
import { CartContext } from './contexts/CartContext';
import axios from 'axios';

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');

  const userId = localStorage.getItem('userId');

  const placeOrder = async () => {
    if (!cartItems.length) {
      alert('Cart is empty');
      return;
    }

    try {
      await axios.post('http://localhost:3000/api/order', {
        userId,
        name,
        mobile,
        email,
        address,
        pincode,
        paymentMethod,
        cartItems,
        orderDate: new Date()
      });

      alert('Order placed successfully!');
      clearCart();
      setName('');
      setMobile('');
      setEmail('');
      setAddress('');
      setPincode('');
      setPaymentMethod('Cash on Delivery');
    } catch (error) {
      console.error('Order failed:', error);
      alert('Failed to place order');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="border p-2 mb-2 rounded">
          <h3 className="font-bold">{item.title}</h3>
          <p>₹{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">Enter Shipping Details:</h3>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 mb-2 w-full" />
        <input value={mobile} onChange={e => setMobile(e.target.value)} placeholder="Mobile" className="border p-2 mb-2 w-full" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-full" />
        <input value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" className="border p-2 mb-2 w-full" />
        <input value={pincode} onChange={e => setPincode(e.target.value)} placeholder="Pincode" className="border p-2 mb-2 w-full" />
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)} className="border p-2 mb-4 w-full">
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
        </select>
        <button
          onClick={placeOrder}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPage;