import Link from 'next/link';
import React from 'react';

const headerStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-around',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  margin: '15px'
};

const Header = () => (
  <header style={headerStyle}>
    <nav>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/about" style={linkStyle}>
        About
      </Link>
      <Link href="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
