import React, { useEffect, useRef, useState } from "react";
import bask from '../img/корзина белая 1.svg';
import pod from '../img/подарок.svg';
import Cart from './Cart';

const Shkal = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  return (
     <>
      <div
        className={`reward-scale sticky`}
      
      >
          <div className="gift-container">
            <img src={pod} alt="Gift" />
            <div className="gift-text">
              <h4>СЗР в подарок</h4>
              <p>Как это работает?</p>
            </div>
          </div>

          <div className="scale-container">
            <div className="scale-values">
              <span className="value-1">30 000</span>
              <span className="value-2">50 000</span>
              <span className="value-3">100 000</span>
            </div>
            <div className="scale-bars">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
            </div>
          </div>

          <div className="cart-container">
            <img src={bask} alt="Cart" onClick={handleCartClick}  />
          </div>
        </div>
        {isCartOpen && <Cart onClose={closeCart} />}
     </>
  );  
};

export default Shkal;
