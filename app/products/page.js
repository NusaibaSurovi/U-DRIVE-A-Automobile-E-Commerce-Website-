'use client';
import { useCart } from '../../context/CartContext';

// সাধারণ গাড়ির ডাটা লিস্ট
const carList = [
  { id: 101, name: 'Toyota Supra GT', price: 85000, modelYear: '2025', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=500&q=80' },
  { id: 102, name: 'Tesla Model X SUV', price: 65000, modelYear: '2026', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=500&q=80' },
  { id: 103, name: 'Ford Mustang Roadster', price: 110000, modelYear: '2024', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=500&q=80' }
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  function handleBuyClick(car) {
    addToCart(car);
    alert(car.name + " has been added to your cart successfully!");
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Car Collection</h2>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {carList.map(function(car) {
          return (
            <div key={car.id} style={{ border: '1px solid #ddd', borderRadius: '8px', width: '280px', padding: '15px', backgroundColor: 'white' }}>
              <img src={car.image} alt={car.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '5px' }} />
              <h3>{car.name}</h3>
              <p style={{ color: '#555' }}>Year: {car.modelYear}</p>
              <p style={{ fontWeight: 'bold', color: '#1e3a8a' }}>Price: ${car.price}</p>
              <button 
                onClick={() => handleBuyClick(car)}
                style={{ width: '100%', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}