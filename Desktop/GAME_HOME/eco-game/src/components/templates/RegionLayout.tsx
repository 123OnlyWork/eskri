import React from 'react';

interface RegionLayoutProps {
  children: React.ReactNode;
}

const RegionLayout: React.FC<RegionLayoutProps> = ({ children }) => {
  return (
    <div className="region-layout">
      <header>
        <h1>Region Layout</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>Region Layout Footer</p>
      </footer>
    </div>
  );
}

export default RegionLayout;