import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Home from './components/pages/Home.tsx';
import About from './components/pages/About.tsx';
import NotFound from './components/pages/NotFound.tsx';
import Resources from './components/pages/Resources.tsx';
import ResourceMap from './components/pages/ResourceMap.tsx'; 
import Manufacture from './components/pages/Manufacture.tsx'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/map" element={<ResourceMap />} /> {/* Добавьте маршрут для карты ресурсов */}
          <Route path="/manufacture" element={<Manufacture />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;