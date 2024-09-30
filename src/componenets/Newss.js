import React from 'react';
import '../style/newss.css';
import Store from './Store';
import Shkal from './Shkal';

const NewsArticle = () => {
  return (
    <>
    <div className="article-container">
      <h1 className="article-title pod">Название статьи</h1>
      <img
        src="https://i.pinimg.com/736x/ed/ed/44/eded44822befbce3d2014ea17bfa472b.jpg"
        alt="Новость"
        className="article-image"
      />
      <p className="article-text">
        Здесь будет текст статьи. Вы можете вставить сюда длинный текст, чтобы описать
        новость или событие. Это место для основной статьи, и она будет отображаться после
        нажатия на кнопку "Читать" в предыдущем компоненте.  Здесь будет текст статьи. Вы можете вставить сюда длинный текст, чтобы описать
        новость или событие. Это место для основной статьи, и она будет отображаться после
        нажатия на кнопку "Читать" в предыдущем компоненте.
        восприятия.
      </p>
    </div>
    <Store/>
    <Shkal/>
    </>
  );
};

export default NewsArticle;
