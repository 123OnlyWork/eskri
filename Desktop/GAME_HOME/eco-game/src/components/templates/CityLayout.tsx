import React from 'react';

interface CityLayoutProps {
  children: React.ReactNode;
}

const CityLayout: React.FC<CityLayoutProps> = ({ children }) => {
  return (
    <div className="city-layout">
      <header>
        <h1>City Layout</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>City Layout Footer</p>
      </footer>
    </div>
  );
}

export default CityLayout;