'use client';

import React, { useState } from 'react';
import { Modal } from './components/Modal';
import { Tabs } from './components/Tabs';
import { Disclosure } from './components/Disclosure';

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🚗 Real-World Automobile Specs Tabs
  const carSpecTabs = [
    { 
      id: 'specs', 
      label: 'Performance & Engine', 
      content: (
        <div style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8' }}>
          <p><strong>Engine:</strong> 4.0L Twin-Turbo V8</p>
          <p><strong>Horsepower:</strong> 650 HP @ 6,000 RPM</p>
          <p><strong>Acceleration:</strong> 0-100 km/h in 3.2 seconds</p>
          <p><strong>Transmission:</strong> 8-Speed Dual-Clutch Automatic</p>
        </div>
      )
    },
    { 
      id: 'interior', 
      label: 'Luxury & Comfort', 
      content: (
        <div style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8' }}>
          <p><strong>Seating:</strong> Hand-stitched Nappa Pink/Cream Leather</p>
          <p><strong>Audio:</strong> Burmester 3D High-End Surround System</p>
          <p><strong>Climate Control:</strong> 4-Zone Automatic Climate Control</p>
        </div>
      )
    },
    { 
      id: 'warranty', 
      label: 'Warranty & Service', 
      content: (
        <div style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8' }}>
          <p><strong>Coverage:</strong> 5 Years / 100,000 km Bumper-to-Bumper</p>
          <p><strong>Roadside Assistance:</strong> 24/7 Dedicated VIP Support</p>
        </div>
      )
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fdf2f8', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ color: '#831843', fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>
            🚘 U-Drive VIP Luxury Feature Hub
          </h1>
          <p style={{ color: '#6b7280', fontSize: '16px', margin: 0 }}>
            Explore complete technical specifications, test-drive details, and luxury customization options.
          </p>
        </div>

        {/* 1. Feature Specifications (TABS) */}
        <section style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '28px', 
          marginBottom: '28px',
          boxShadow: '0 4px 20px rgba(190, 24, 93, 0.08)',
          border: '1px solid #fbcfe8' 
        }}>
          <h2 style={{ fontSize: '20px', color: '#111827', fontWeight: '700', marginBottom: '16px' }}>
            ⚙️ Vehicle Specifications
          </h2>
          <Tabs items={carSpecTabs} />
        </section>

        {/* 2. Frequently Asked Questions (DISCLOSURE) */}
        <section style={{ 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          padding: '28px', 
          marginBottom: '28px',
          boxShadow: '0 4px 20px rgba(190, 24, 93, 0.08)',
          border: '1px solid #fbcfe8' 
        }}>
          <h2 style={{ fontSize: '20px', color: '#111827', fontWeight: '700', marginBottom: '16px' }}>
            ❓ Buyer FAQ & Purchase Guidelines
          </h2>
          
          <Disclosure title="How does the home delivery service work?">
            <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>
              Once your booking is confirmed, our dedicated transport team delivers the luxury car straight to your doorstep on a closed trailer.
            </p>
          </Disclosure>

          <Disclosure title="What documents are needed for test-drive booking?">
            <p style={{ margin: 0, color: '#4b5563', lineHeight: '1.6' }}>
              You will need a valid National ID or Passport along with an active driving license.
            </p>
          </Disclosure>
        </section>

        {/* 3. Action Call / Booking Modal (MODAL) */}
        <section style={{ 
          backgroundColor: '#be185d', 
          borderRadius: '16px', 
          padding: '32px', 
          textAlign: 'center',
          color: '#ffffff',
          boxShadow: '0 10px 25px rgba(190, 24, 93, 0.25)' 
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '8px' }}>
            Ready to Take the Wheel?
          </h2>
          <p style={{ color: '#fce7f3', marginBottom: '20px', fontSize: '15px' }}>
            Schedule an exclusive private consultation with our luxury car specialists today.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '12px 28px',
              backgroundColor: '#ffffff',
              color: '#be185d',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '15px'
            }}
          >
            Request Private Consultation
          </button>

          {/* Modal Overlay */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Book VIP Consultation">
            <div style={{ color: '#374151', textAlign: 'left' }}>
              <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
                Fill in your details below to schedule a one-on-one consultation with our U-Drive luxury car expert.
              </p>
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px', fontSize: '13px' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Nusaiba Surovi" 
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} 
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '4px', fontSize: '13px' }}>Phone Number</label>
                <input 
                  type="text" 
                  placeholder="+880 1XXXXXXXXX" 
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', boxSizing: 'border-box' }} 
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{ padding: '8px 16px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Consultation Request Submitted!');
                    setIsModalOpen(false);
                  }}
                  style={{ padding: '8px 16px', backgroundColor: '#be185d', color: '#ffffff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                >
                  Confirm Request
                </button>
              </div>
            </div>
          </Modal>
        </section>

      </div>
    </div>
  );
}