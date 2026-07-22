'use client';

import React, { useState } from 'react';

interface Car {
  id: number;
  name: string;
  brand: string;
  fuel: string;
  price: number;
  image: string;
  badge?: string;
}

const CAR_DATA: Car[] = [
  {
    id: 1,
    name: 'Tesla Model S',
    brand: 'Tesla',
    fuel: 'Electric',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular',
  },
  {
    id: 2,
    name: 'Ford Mustang GT',
    brand: 'Ford',
    fuel: 'Petrol',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=600&q=80',
    badge: 'Fast',
  },
  {
    id: 3,
    name: 'BMW M5 Competition',
    brand: 'BMW',
    fuel: 'Petrol',
    price: 105000,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
    badge: 'Luxury',
  },
  {
    id: 4,
    name: 'Porsche Taycan',
    brand: 'Porsche',
    fuel: 'Electric',
    price: 90000,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=600&q=80',
    badge: 'EV Supercar',
  },
  {
    id: 5,
    name: 'Toyota Prius Hybrid',
    brand: 'Toyota',
    fuel: 'Hybrid',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80',
    badge: 'Eco Friendly',
  },
];

export default function CarCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [maxPrice, setMaxPrice] = useState(120000);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredCars = CAR_DATA.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
    const matchesFuel = selectedFuel === 'All' || car.fuel === selectedFuel;
    const matchesPrice = car.price <= maxPrice;
    return matchesSearch && matchesBrand && matchesFuel && matchesPrice;
  });

  return (
    <div style={{ margin: '30px auto' }}>
      
      {/* Search & Filter Header Box */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '25px 30px',
        boxShadow: '0 10px 30px rgba(190, 24, 93, 0.08)',
        border: '1px solid #fbcfe8',
        marginBottom: '35px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <h3 style={{ margin: 0, color: '#830941', fontSize: '22px', fontWeight: 'bold' }}>
            🚗 Explore Vehicle Fleet
          </h3>
          <span style={{ fontSize: '14px', color: '#be185d', backgroundColor: '#fce7f3', padding: '6px 14px', borderRadius: '20px', fontWeight: 'bold' }}>
            Favorites Saved: {favorites.length} ❤️
          </span>
        </div>

        {/* Filter Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', alignItems: 'center' }}>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="🔍 Search car model..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #f472b6',
              outline: 'none',
              fontSize: '14px',
              backgroundColor: '#fff5f7'
            }}
          />

          {/* Brand Dropdown */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #f472b6',
              outline: 'none',
              fontSize: '14px',
              backgroundColor: '#fff5f7',
              color: '#4c0519'
            }}
          >
            <option value="All">All Brands</option>
            <option value="Tesla">Tesla</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Porsche">Porsche</option>
            <option value="Toyota">Toyota</option>
          </select>

          {/* Fuel Dropdown */}
          <select
            value={selectedFuel}
            onChange={(e) => setSelectedFuel(e.target.value)}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              border: '1px solid #f472b6',
              outline: 'none',
              fontSize: '14px',
              backgroundColor: '#fff5f7',
              color: '#4c0519'
            }}
          >
            <option value="All">All Fuel Types</option>
            <option value="Electric">Electric</option>
            <option value="Petrol">Petrol</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Price Range Slider */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 'bold', color: '#830941' }}>
              <span>Max Price:</span>
              <span>${maxPrice.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="20000"
              max="120000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ accentColor: '#be185d', cursor: 'pointer' }}
            />
          </div>

        </div>
      </div>

      {/* Car Grid Collection */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '25px'
      }}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => {
            const isFav = favorites.includes(car.id);
            return (
              <div
                key={car.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #fbcfe8',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between'
                }}
              >
                {/* Image & Badge Container */}
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={car.image}
                    alt={car.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {car.badge && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(190, 24, 93, 0.9)',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {car.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ margin: 0, fontSize: '18px', color: '#4c0519', fontWeight: 'bold' }}>{car.name}</h4>
                    <span style={{
                      fontSize: '12px',
                      backgroundColor: '#fce7f3',
                      color: '#be185d',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      fontWeight: 'bold'
                    }}>
                      {car.fuel}
                    </span>
                  </div>

                  <p style={{ margin: '0 0 15px 0', fontSize: '20px', color: '#be185d', fontWeight: '800' }}>
                    ${car.price.toLocaleString()}
                  </p>

                  <button
                    onClick={() => toggleFavorite(car.id)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: isFav ? '#be185d' : '#fce7f3',
                      color: isFav ? 'white' : '#be185d',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isFav ? '❤️ Favorited' : '🤍 Add to Favorites'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '16px', color: '#be185d', border: '1px dashed #f472b6' }}>
            😔 No cars found matching your criteria!
          </div>
        )}
      </div>

    </div>
  );
}