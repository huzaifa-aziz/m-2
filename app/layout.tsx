
import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column', // Type assertion for TypeScript
  minHeight: '100vh',
};

const mainStyle = {
  flex: '1',
  padding: '20px',
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div style={layoutStyle}>
    <Navbar />
    <main style={mainStyle}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
