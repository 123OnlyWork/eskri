import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav style={{ display: 'flex', gap: '15px' }}>
    <Link to="/map" className="nav-link">
      Карта ресурсов
    </Link>
    <Link to="/manufacture" className="nav-link">
      Производство
    </Link>
    <Link to="/resources" className="nav-link">
      Ресурсы
    </Link>
    <Link to="/about" className="nav-link">
      О проекте
    </Link>
    
  </nav>
);

export default NavBar;
