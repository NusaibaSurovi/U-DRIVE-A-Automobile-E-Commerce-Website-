import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff5f7', paddingBottom: '50px' }}>
      
      {/* Bannneeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
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

      {/* ২. নতুন সেকশন: আমাদের বিশেষ গাড়িগুলো (Featured Collection) */}
      <div style={{ maxWidth: '1000px', margin: '50px auto', padding: '0 20px' }}>
        <h2 style={{ textTransform: 'uppercase', textAlign: 'center', color: '#830941', fontSize: '26px', marginBottom: '30px' }}>
          🔥 This Week's Special Deals
        </h2>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* মিনি কার্ড ১ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '10px', padding: '15px', width: '280px', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=300&q=80" style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ margin: '10px 0 5px 0', color: '#4c0519' }}>Toyota Supra GT</h4>
            <p style={{ color: '#be185d', fontWeight: 'bold', margin: '0' }}>$85,000</p>
          </div>

          {/* মিনি কার্ড ২ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '10px', padding: '15px', width: '280px', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=300&q=80" style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ margin: '10px 0 5px 0', color: '#4c0519' }}>Tesla Model X</h4>
            <p style={{ color: '#be185d', fontWeight: 'bold', margin: '0' }}>$65,000</p>
          </div>

          {/* মিনি কার্ড ৩ */}
          <div style={{ backgroundColor: 'white', border: '1px solid #fbcfe8', borderRadius: '10px', padding: '15px', width: '280px', textAlign: 'center' }}>
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80" style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ margin: '10px 0 5px 0', color: '#4c0519' }}>Ford Mustang</h4>
            <p style={{ color: '#be185d', fontWeight: 'bold', margin: '0' }}>$110,000</p>
          </div>
        </div>
      </div>

      {/* ৩. নতুন সেকশন: ক্রেতাদের রিভিউ (Testimonial) */}
      <div style={{ maxWidth: '600px', margin: '60px auto 20px auto', backgroundColor: '#fdf2f8', borderLeft: '5px solid #be185d', padding: '20px', borderRadius: '4px' }}>
        <p style={{ fontStyle: 'italic', color: '#4c0519', fontSize: '16px', margin: '0 0 10px 0' }}>
          "Buying my first luxury car from U-Drive was smooth. The booking process for the test drive was simple, and the car condition is just amazing!"
        </p>
        <p style={{ fontWeight: 'bold', color: '#be185d', margin: '0', textAlign: 'right' }}>
          — Nusaiba Surovi, Dhaka
        </p>
      </div>

    </div>
  );
}