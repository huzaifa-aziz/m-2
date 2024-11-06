import React from "react";

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
};

export default function About() {
  return (
    <>
      
      <main style={mainStyle}>
        <h1 style={{ color: '#4A90E2' }}>About Me</h1>
        <p style={{ color: '#333' }}>
          I am a Junior Developer skilled in C#, .NET, PHP, Laravel, React, HTML, CSS, JavaScript, and TypeScript.
        </p>
      </main>
      
    </>
  );
}
