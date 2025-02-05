import React from 'react';
import FooterLinks from '../molecules/FooterLinks.tsx';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#333', padding: '20px', color: '#fff', textAlign: 'center' }}>
      <FooterLinks />
      <p style={{ marginTop: '10px' }}>© 2024 Все права защищены</p>
    </footer>
  );
};

export default Footer;
