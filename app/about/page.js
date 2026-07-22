import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff5f7', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* 1. Header Banner Section */}
      <div style={{
        background: 'linear-gradient(135deg, #ffe4e6 0%, #fbcfe8 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        borderBottom: '1px solid #fbcfe8'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
            backgroundColor: '#be185d',
            color: 'white',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            ABOUT U-DRIVE
          </span>
          <h1 style={{ fontSize: '42px', color: '#830941', marginTop: '15px', marginBottom: '15px', fontWeight: '800' }}>
            Who We Are
          </h1>
          <p style={{ fontSize: '18px', color: '#5c1131', lineHeight: '1.7', margin: '0' }}>
            U-Drive (AutoVibe) is your ultimate luxury automobile partner. We are committed to making the car buying and test-driving experience simple, transparent, and completely hassle-free.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 2. Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginTop: '-40px',
          marginBottom: '60px'
        }}>
          {[
            { number: '500+', label: 'Luxury Cars Sold' },
            { number: '100%', label: 'Verified Inspection' },
            { number: '24/7', label: 'Customer Support' },
            { number: '4.9 ★', label: 'User Satisfaction' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              backgroundColor: 'white',
              padding: '25px 20px',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(190, 24, 93, 0.08)',
              border: '1px solid #fbcfe8'
            }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '32px', color: '#be185d', fontWeight: '800' }}>{stat.number}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#830941', fontWeight: '600' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. Core Features / Why Choose Us */}
        <div style={{ textTransform: 'none', marginBottom: '60px' }}>
          <h2 style={{ textAlign: 'center', color: '#830941', fontSize: '28px', fontWeight: '800', marginBottom: '35px' }}>
            Why Choose U-Drive?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            
            {/* Feature 1 */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '18px',
              border: '1px solid #fbcfe8',
              boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '15px' }}>🚚</div>
              <h3 style={{ margin: '0 0 10px 0', color: '#4c0519', fontSize: '20px' }}>Safe Home Transfer</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.6', fontSize: '15px' }}>
                We safely deliver your purchased or booked luxury automobile straight to your doorstep with full insurance coverage.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '18px',
              border: '1px solid #fbcfe8',
              boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '15px' }}>🛡️</div>
              <h3 style={{ margin: '0 0 10px 0', color: '#4c0519', fontSize: '20px' }}>7-Day Money Back Guarantee</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.6', fontSize: '15px' }}>
                Drive with peace of mind. If you encounter any structural issues within 7 days, return it hassle-free.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '18px',
              border: '1px solid #fbcfe8',
              boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s ease'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '15px' }}>🔍</div>
              <h3 style={{ margin: '0 0 10px 0', color: '#4c0519', fontSize: '20px' }}>150+ Point Checklist</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.6', fontSize: '15px' }}>
                Every single vehicle passes through strict inspection by our expert engineers before being listed in our garage.
              </p>
            </div>

          </div>
        </div>

        {/* 4. Call To Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #be185d 0%, #830941 100%)',
          borderRadius: '24px',
          padding: '50px 30px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 15px 35px rgba(190, 24, 93, 0.25)'
        }}>
          <h2 style={{ fontSize: '30px', margin: '0 0 15px 0', fontWeight: '800' }}>Ready to Experience Premium Comfort?</h2>
          <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
            Book a test drive today or explore our showroom to discover the best deals on luxury vehicles.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              backgroundColor: 'white',
              color: '#be185d',
              padding: '12px 28px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '15px'
            }}>
              Browse Fleet
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}