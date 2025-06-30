import { createContext, useState } from 'react';

// Step 1: Create the context with default values
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},      // This was missing
  clearCart: () => {},
});

// Step 2: Create the provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Define addToCart function
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Clear cart function
  const clearCart = () => {
    setCartItems([]);
  };

  // Step 3: Provide values to context
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};