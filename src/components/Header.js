// src/components/Header.js

import React from 'react';

function Header() {
  const emoji = '(⌐■_■)';
  
  return (
    <header style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '24px', margin: 0 }}>HyperMD</h1>
      <pre style={{ fontFamily: 'monospace', fontSize: '16px', margin: 0 }}>{emoji}</pre>
    </header>
  );
}

export default Header;
