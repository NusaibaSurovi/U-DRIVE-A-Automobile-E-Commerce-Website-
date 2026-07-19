export default function AboutPage() {
    return (
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Who We Are</h2>
        <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '16px' }}>
          AutoVibe Store is a reliable place to buy new and used luxury cars. We started our journey to make the car buying process very simple and transparent for everyone. We make sure every car is checked by our team before we list it here.
        </p>
        
        <div style={{ marginTop: '40px', display: 'flex', gap: '15px', justifyContent: 'space-between' }}>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', flex: 1 }}>
            <h4>Safe Transfer</h4>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>We deliver cars safely right to your home.</p>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', flex: 1 }}>
            <h4>7 Days Warranty</h4>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>If you face problems, return it in 7 days.</p>
          </div>
        </div>
      </div>
    );
  }