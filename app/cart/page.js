'use client';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // সাধারণ লুপ চালিয়ে টোটাল প্রাইস বের করা
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].price;
  }

  function doCheckout(e) {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Please fill out the form first!');
      return;
    }
    alert('Thank you ' + name + '! Your car order has been placed. We will contact you soon.');
    clearCart();
    setName('');
    setEmail('');
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty. Go back and select a car!</p>
      ) : (
        <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
          <div style={{ border: '1px solid #eee', padding: '15px', borderRadius: '5px' }}>
            {cart.map(function(item) {
              return (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                  <div>
                    <h4>{item.name}</h4>
                    <p style={{ color: 'blue' }}>${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', backgroundColor: '#f9fafb' }}>
            <h3>Order Details</h3>
            <p><strong>Total Price: ${totalCost}</strong></p>
            
            <form onSubmit={doCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
              <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              <button type="submit" style={{ backgroundColor: '#16a34a', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}