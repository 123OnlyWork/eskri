import React from 'react';
import Logo from '../atoms/Logo.tsx';
import NavBar from '../molecules/NavBar.tsx';

const Header: React.FC = () => (
  <header style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 20px', backgroundColor: '#2c3e50', color: 'white', position: 'fixed',
    top: 0, left: 0, width: '100%'
  }}>
    <div >
      <Logo />
    </div>
    <div>
    <NavBar />
    </div>
  </header>
);

export default Header;
