import React from 'react';
import { Link } from 'react-router-dom'; // Используем Link, если используете react-router

const Logo: React.FC = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>
      GAME
    </span>
  </Link>
);

export default Logo;
