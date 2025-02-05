import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../templates/MainLayout.tsx';
import '../../styles/App.css';
import videoBackground from 'C:/Users/eskri/Desktop/GAME_HOME/eco-game/src/assets/videoplayback.mp4'; // Adjust path accordingly

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div></div>
      <div className="hero">
        {/* Контейнер для видео */}
        <div className="video-container">
          <video autoPlay loop muted className="video-background">
            <source src={videoBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Контент поверх видео */}
        <div className="hero-content">
          <h1>Добро пожаловать в экономический симулятор!</h1>
          <p>Строй предприятия, управляй ресурсами, влияй на экономику и политику!</p>
          <Link to="/start" className="start-button">Начать игру</Link>

          <ul>
            <li><Link to="/about">О игре</Link></li>
            <li><Link to="/how-to-play">Как играть</Link></li>
            <li><Link to="/news">Новости</Link></li>
            <li><Link to="/resources">Ресурсы</Link></li>
            <li><Link to="/map">Карта ресурсов</Link></li>
            <li><Link to="/politics">Политика</Link></li>
            <li><Link to="/trade">Торговля</Link></li>
            <li><Link to="/community">Сообщество</Link></li>
            <li><Link to="/manufacture">Производство</Link></li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
