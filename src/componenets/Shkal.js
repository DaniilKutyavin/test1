import React, { useState } from "react";
import bask from '../img/корзина белая 1.svg';
import pod from '../img/подарок.svg';
import Cart from './Cart';
import PopupInfo from './PopupInfo'; // Импортируйте компонент PopupInfo

const Shkal = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Состояние для всплывающего окна

  const handleCartClick = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const handleGiftClick = () => setIsPopupOpen(true); // Открытие всплывающего окна
  const closePopup = () => setIsPopupOpen(false); // Закрытие всплывающего окна

  return (
    <>
      <div className={`reward-scale sticky`}>
        <div className="gift-container">
          <img src={pod} alt="Gift" onClick={handleGiftClick} /> {/* Обработчик клика */}
          <div className="gift-text">
            <h4>СЗР в подарок</h4>
            <p>Как это работает?</p>
          </div>
        </div>

        <div className="scale-container">
          <div className="scale-values">
            <span className="value-1">50 000</span>
            <span className="value-2">100 000</span>
            <span className="value-3">150 000</span>
          </div>
          <div className="scale-bars">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
          </div>
        </div>

        <div className="cart-container">
          <img src={bask} alt="Cart" onClick={handleCartClick} />
        </div>
      </div>
      
      {isCartOpen && <Cart onClose={closeCart} />}
      {isPopupOpen && <PopupInfo onClose={closePopup} />} {/* Вызов компонента всплывающего окна */}
    </>
  );  
};

export default Shkal;
