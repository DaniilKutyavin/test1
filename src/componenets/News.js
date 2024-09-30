import React, { useState } from 'react';
import '../style/news.css';
import Store from './Store';
import arrowDown from '../img/стрелка вниз.svg'; // Импортируем изображение стрелки
import { Link } from 'react-router-dom';
import Shkal from './Shkal';

const newsData = [
  { year: '5 Июля', theme: 'Удабрять селитрой в непогоду нужно придерживаясь одного...', image: 'https://i.pinimg.com/736x/ed/ed/44/eded44822befbce3d2014ea17bfa472b.jpg' },
  { year: '2022', theme: 'Theme 2022', image: 'https://i.pinimg.com/originals/d7/76/86/d77686b81b922d1767b3e839cbc47c92.jpg' },
  { year: '2023', theme: 'Theme 2023', image: 'https://static.tildacdn.com/tild3632-3663-4133-a437-323061656238/0002-56.jpg' },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === newsData.length - 1 ? 0 : prevIndex + 1));
  };

  const { year, theme, image } = newsData[currentIndex];

  return (
    <>
      <div className="header">
      <div className="title-block">
        <h1>Новости</h1>
        <p className="pod">Будьте в курсе всех событий</p>
        </div>
      </div>
      <div className="news-section">
        <div className="news-content">
          <div className="news-circle">
            <div className="news-text">
              <span className="news-date">{year}</span>
              <h2>{theme}</h2>
            </div>
            <img src={image} alt={theme} className="news-image" />
          </div>
        </div>
        <div className="news-info">
          <button className="news-button" onClick={handlePrevious}>
            <img src={arrowDown} alt="Предыдущий" className="arrow-icon rotate-left" />
          </button>
          <Link to="/news/1">
            <button className="read-button">Читать</button>
          </Link>
          <button className="news-button" onClick={handleNext}>
            <img src={arrowDown} alt="Следующий" className="arrow-icon rotate-right" />
          </button>
        </div>
      </div>
      <Store />
      <Shkal/>
    </>
  );
};

export default News;
