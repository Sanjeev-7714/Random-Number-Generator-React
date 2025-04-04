import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  const [numbers, setNumbers] = useState<number[]>([0, 0, 0]);

  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 3 }, () => 
      Math.floor(Math.random() * 100) + 1
    );
    setNumbers(newNumbers);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffe4c4 0%, #ffebcd 50%, #ffdab9 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(10px)',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 6px rgba(139, 69, 19, 0.1)',
        textAlign: 'center',
        maxWidth: '90%',
        width: '400px',
      }}>
        <h1 style={{
          color: '#8B4513',
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: '600',
        }}>
          Random Number Generator
        </h1>
        
        <button
          onClick={generateNumbers}
          style={{
            backgroundColor: '#DEB887',
            color: '#8B4513',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            margin: '0 auto',
            transition: 'transform 0.2s ease',
            ':hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Sparkles size={20} />
          Generate Numbers
        </button>

        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          {numbers.map((number, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, #CD853F 0%, #D2691E 100%)',
                color: '#FFF8DC',
                padding: '1rem',
                borderRadius: '0.5rem',
                fontSize: '1.5rem',
                fontWeight: '700',
                minWidth: '80px',
                boxShadow: '0 4px 8px rgba(139, 69, 19, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;