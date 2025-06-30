import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import CartPage from './CartPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error('Error connecting to backend:', err);
        setMessage('Failed to connect to backend');
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />

      <header className="py-6 text-center border-b">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to ShopeZ</h1>
        <p className="text-sm text-gray-500">{message}</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        <section id="register" className="bg-gray-50 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">🔐 Register</h2>
          <Register />
        </section>

        <section id="login" className="bg-gray-50 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">🔑 Login</h2>
          <Login />
        </section>

        <section id="add" className="bg-gray-50 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">➕ Add Product</h2>
          <AddProduct />
        </section>

        <section id="list" className="bg-gray-50 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">📦 Product List</h2>
          <ProductList />
        </section>

        <section id="cart" className="bg-gray-50 p-6 rounded-lg border shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">🛒 Cart Page</h2>
          <CartPage />
        </section>
      </main>
    </div>
  );
}

export default App;