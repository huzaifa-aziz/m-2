import Header from '../components/Navbar';
import Footer from '../components/Footer';

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

export default function Home() {
  return (
    <>
      <Header />
      <main style={mainStyle}>
        <h1 style={{ color: '#4A90E2' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#333' }}>I am a Junior Web & Mobile App Developer.</p>
      </main>
      <Footer />
    </>
  );
}
