'use client';
import { useState } from 'react';

export default function TestDrivePage() {
  const [carName, setCarName] = useState('Toyota Supra GT');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    if(date === '' || phone === '') {
      alert('Please fill up all information!');
      return;
    }
    alert('Successfully booked! Your request for a test drive of ' + carName + ' is confirmed for ' + date + '.');
    setDate('');
    setPhone('');
  }

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '25px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Book a Test Drive</h2>
      <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>Fill this form to drive your favorite car.</p>
      
      <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Choose Car Model:</label>
          <select value={carName} onChange={(e) => setCarName(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
            <option value="Toyota Supra GT">Toyota Supra GT</option>
            <option value="Tesla Model X SUV">Tesla Model X SUV</option>
            <option value="Ford Mustang Roadster">Ford Mustang Roadster</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Select Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: '95%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number:</label>
          <input type="tel" placeholder="017XXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: '95%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
        </div>

        <button type="submit" style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
          Book Now
        </button>
      </form>
    </div>
  );
}