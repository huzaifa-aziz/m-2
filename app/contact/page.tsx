import React from "react";

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

export default function Contact() {
  return (
    <>
      
      <main style={mainStyle}>
        <h1 style={{ color: '#4A90E2' }}>Contact Me</h1>
        <p style={{ color: '#333' }}>Email: azizh4495@gmail.com</p>
        <p style={{ color: '#333' }}>Phone: +92-348-084-6177</p>
      </main>
     
    </>
  );
}
