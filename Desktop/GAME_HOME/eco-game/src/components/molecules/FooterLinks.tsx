import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Link to="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Политика конфиденциальности</Link>
      <Link to="/terms-of-service" style={{ color: '#fff', textDecoration: 'none' }}>Условия использования</Link>
      <Link to="/contacts" style={{ color: '#fff', textDecoration: 'none' }}>Контакты</Link>
    </div>
  );
};

export default FooterLinks;
