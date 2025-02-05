import React from 'react';
import Header from '../organisms/Header.tsx';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <main style={{ flex: 1, paddingTop: '60px' }}>{/* 60px — высота header */}
      {children}
    </main>
  </div>
);

export default MainLayout;
