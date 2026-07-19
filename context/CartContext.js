'use client';
import { createContext, useContext, useState } from 'react';

const MyCartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // একদম সহজ নিয়মে কার্টে আইটেম যোগ করা
  function addItem(car) {
    let check = items.find(i => i.id === car.id);
    if (!check) {
      setItems([...items, car]);
    }
  }

  // কার্ট থেকে বাদ দেওয়া
  function removeItem(id) {
    let remaining = items.filter(i => i.id !== id);
    setItems(remaining);
  }

  // পুরো কার্ট খালি করা
  function clearAll() {
    setItems([]);
  }

  return (
    <MyCartContext.Provider value={{ cart: items, addToCart: addItem, removeFromCart: removeItem, clearCart: clearAll }}>
      {children}
    </MyCartContext.Provider>
  );
}

export function useCart() {
  return useContext(MyCartContext);
}