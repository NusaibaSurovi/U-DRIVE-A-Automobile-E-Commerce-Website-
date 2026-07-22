import Link from 'next/link';
import CarCatalog from '@/components/CarCatalog';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff5f7', paddingBottom: '50px' }}>
      
      {/* ১. ব্যানার সেকশন */}
      <div style={{ 
        textAlign: 'center', 
        padding: '100px 20px', 
        background: 'linear-gradient(135deg, #ffe4e6 0%, #fbcfe8 100%)', 
        color: '#4c0519' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ backgroundColor: '#be185d', color: 'white', padding: '6px 16px', borderRadius: '15px', fontSize: '13px', fontWeight: 'bold' }}>
            PREMIUM VEHICLE SHOWROOM
          </span>
          <h1 style={{ fontSize: '46px', marginTop: '15px', marginBottom: '20px', color: '#830941', fontWeight: '800' }}>
            Find Your Dream Ride at <br /> 
            <span style={{ color: '#be185d', fontSize: '52px' }}>U-Drive</span>
          </h1>
          <p style={{ fontSize: '19px', color: '#5c1131', marginBottom: '40px', lineHeight: '1.6' }}>
            We bring you the finest luxury automobiles wrapped in premium comfort. Explore our verified garage and drive with style.
          </p>
          <Link href="/products" style={{ 
            backgroundColor: '#be185d', 
            color: 'white', 
            padding: '14px 32px', 
            borderRadius: '25px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '18px',
            boxShadow: '0 4px 12px rgba(190, 24, 93, 0.3)'
          }}>
            Explore Showroom
          </Link>
        </div>
      </div>

      {/* ২. AI Dynamic Car Filter & Favorites System */}
      <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        <CarCatalog />
      </div>

      {/* ৩. রিডিজাইন করা স্পেশাল ডিলস সেকশন (This Week's Special Deals) */}
      <div style={{ maxWidth: '1050px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <span style={{ backgroundColor: '#fce7f3', color: '#be185d', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Limited Time Offers
          </span>
          <h2 style={{ color: '#830941', fontSize: '28px', marginTop: '10px', fontWeight: '800' }}>
            🔥 THIS WEEK'S SPECIAL DEALS
          </h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          
          {/* কার্ড ১ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Toyota Supra GT" />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#e11d48', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                  10% OFF
                </span>
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#4c0519', fontSize: '18px', fontWeight: 'bold' }}>Toyota Supra GT</h4>
                <p style={{ color: '#be185d', fontWeight: '800', fontSize: '20px', margin: '0' }}>$85,000</p>
              </div>
            </div>
            <div style={{ padding: '0 20px 20px 20px' }}>
              <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', backgroundColor: '#be185d', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                View Deal
              </button>
            </div>
          </div>

          {/* কার্ড ২ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Tesla Model X" />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#e11d48', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                  HOT DEAL
                </span>
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#4c0519', fontSize: '18px', fontWeight: 'bold' }}>Tesla Model X</h4>
                <p style={{ color: '#be185d', fontWeight: '800', fontSize: '20px', margin: '0' }}>$65,000</p>
              </div>
            </div>
            <div style={{ padding: '0 20px 20px 20px' }}>
              <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', backgroundColor: '#be185d', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                View Deal
              </button>
            </div>
          </div>

          {/* কার্ড ৩ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Ford Mustang" />
                <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#e11d48', color: 'white', fontSize: '11px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '12px' }}>
                  BEST VALUE
                </span>
              </div>
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#4c0519', fontSize: '18px', fontWeight: 'bold' }}>Ford Mustang</h4>
                <p style={{ color: '#be185d', fontWeight: '800', fontSize: '20px', margin: '0' }}>$110,000</p>
              </div>
            </div>
            <div style={{ padding: '0 20px 20px 20px' }}>
              <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: 'none', backgroundColor: '#be185d', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                View Deal
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ৪. টেস্টモニফোরিয়্যাল/রিভিউ সেকশন */}
      <div style={{ maxWidth: '650px', margin: '60px auto 20px auto', backgroundColor: '#ffffff', borderLeft: '6px solid #be185d', padding: '25px', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.04)' }}>
        <p style={{ fontStyle: 'italic', color: '#4c0519', fontSize: '16px', margin: '0 0 12px 0', lineHeight: '1.6' }}>
          "Buying my first luxury car from U-Drive was smooth. The booking process for the test drive was simple, and the car condition is just amazing!"
        </p>
        <p style={{ fontWeight: 'bold', color: '#be185d', margin: '0', textAlign: 'right' }}>
          — Nusaiba Surovi, Dhaka
        </p>
      </div>

    </div>
  );
}