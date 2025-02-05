import React from 'react';
import MainLayout from '../templates/MainLayout.tsx';

const NotFound: React.FC = () => {
  return (
    <MainLayout>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </MainLayout>
  );
}

export default NotFound;