import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style/shop.css";
import { Link, useLocation } from "react-router-dom";
import Cart from './Cart';
import videoSrc from "../img/Asa.mp4";


import img1 from "../img/kb1.png";
import img2 from "../img/kb2.png";
import img3 from "../img/kb3.png";
import img4 from "../img/kb4.png";
import img5 from "../img/kb5.png";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import circle1 from "../img/кольцо1.svg";
import circle2 from "../img/кольцо2.svg";
import circle3 from "../img/кольцо3.svg";
import circle4 from "../img/Кольцо4.svg";
import kolos from "../img/Колос.svg"; // Ваш SVG слоган
import Store from "./Store";
import bask from '../img/корзина белая 1.svg';
import pod from '../img/подарок.svg';
import ScrollContainer from "./scroll";
const Shop = () => {
  const [isSticky, setIsSticky] = useState(false);
  const rewardScaleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!rewardScaleRef.current) return;
      const { top, bottom } = rewardScaleRef.current.getBoundingClientRect();
      const shopContainer = document.querySelector('.shop-container');
      const { bottom: shopBottom } = shopContainer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
  
      // Проверяем, когда нижняя граница блока достигает нижней границы экрана
      if (bottom <= viewportHeight && !isSticky) {
        setIsSticky(true);
      } 
      // Проверяем, когда верхняя граница блока достигает нижней границы shop-container
      else if (isSticky && top < shopBottom) {
        setIsSticky(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Запускаем обработчик сразу, чтобы установить правильное состояние
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  const [isCartOpen, setIsCartOpen] = useState(false);

 

  const handleCartClick = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnded = () => {
      setIsVideoPlaying(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
      videoRef.current.play().catch((error) => {
        console.error("Ошибка воспроизведения видео:", error);
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      }
      // Сброс прокрутки при размонтировании
      document.body.style.overflow = 'auto';
    };
  }, [isVideoPlaying]);

  return (
    <>
    
      {/* Слайдер */}
      <div className="shop-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="shop-slider"
        >
          {[img6,img7,img8,img1, img2, img3, img4, img5].map((src, index) => (
            <SwiperSlide key={index} className="shop-slide">
              <img src={src} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="blur-overlay-container">
          <div className="blur-overlay-top">
            <Link to="/product" className="blur-block top-left">
              <p className="opis">163</p>
              <h4>ХСЗР</h4>
              <p >Обеспечте защиту ваших культур</p>
            </Link>
            <Link to="/product" className="blur-block top-right">
              <p className="opis">24</p>
              <h4>Удобрения</h4>
              <p>Потдерживайте почву необходимыми элементами питания</p>
            </Link>
          </div>
          <div className="blur-overlay-bottom">
            <Link to="/product" className="blur-block long bottom-right">
              <p className="opis">19</p>
              <h4>Посевной материал</h4>
              <p>Запаситесь качественными семенами заранее</p>
            </Link>
            <Link to="/product" className="blur-block short bottom-left">
              <p className="text-left opis">8</p>
              <img src={kolos} alt="Block 4 Image" className="block4-image" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`reward-scale ${isSticky ? "sticky" : ""}`}
        ref={rewardScaleRef}
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
          
   
        <div style={{ width: '100%', overflow: 'hidden' }}>
    
    </div>
      {isCartOpen && <Cart onClose={closeCart} />}
      <Store />
    </>
  );
};

export default Shop;
