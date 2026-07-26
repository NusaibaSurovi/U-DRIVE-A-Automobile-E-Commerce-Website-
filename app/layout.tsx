import { CartProvider } from '../context/CartContext';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#fff5f7', color: '#2b1018', margin: 0, fontFamily: 'sans-serif' }}>
        <CartProvider>
          {/* LOGO walaaaaa U-Drive  */}
          <nav style={{ backgroundColor: '#be185d', color: 'white', padding: '15px' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '22px', fontWeight: 'bold' }}>
                💖 U-Drive 
              </Link>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Link href="/" style={{ color: '#ffe4e6', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
                <Link href="/products" style={{ color: '#ffe4e6', textDecoration: 'none', fontWeight: '500' }}>Cars</Link>
                <Link href="/about" style={{ color: '#ffe4e6', textDecoration: 'none', fontWeight: '500' }}>About Us</Link>
                <Link href="/test-drive" style={{ color: '#ffe4e6', textDecoration: 'none', fontWeight: '500' }}>Book Test Drive</Link>
                <Link href="/playground" style={{ color: '#ffe4e6', textDecoration: 'none', fontWeight: '500' }}>Playground</Link>
                <Link href="/cart" style={{ color: 'white', backgroundColor: '#6d28d9', padding: '7px 14px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }}>
                  My Cart 🛒
                </Link>
              </div>
            </div>
          </nav>

          <main style={{ minHeight: '80vh' }}>
            {children}
          </main>

          <footer style={{ backgroundColor: '#4c0519', color: '#ffe4e6', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
            <p>© 2026 U-Drive . All rights reserved.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}