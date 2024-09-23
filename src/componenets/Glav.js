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
import circle1 from "../img/кольцо1.svg";
import circle2 from "../img/кольцо2.svg";
import circle3 from "../img/кольцо3.svg";
import circle4 from "../img/Кольцо4.svg";
import kolos from "../img/Колос.svg"; // Ваш SVG слоган
import Store from "./Store";
import bask from '../img/корзина белая 1.svg';
import pod from '../img/подарок.svg';
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
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { top, bottom } = scrollContainerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
  
        // Проверяем, когда блок становится видимым
        if (top < viewportHeight && bottom > 0) {
          const scrollSpeedFactor = 2; // Увеличиваем скорость прокрутки
          const scrollAmount = scrollSpeedFactor * (bottom - top) / viewportHeight;
          scrollContainerRef.current.scrollBy({
            left: scrollAmount, // Листаем по горизонтали
            behavior: 'smooth'
          });
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
     {isVideoPlaying && (
        <div className="video-container">
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop={false}
          />
        </div>
      )}
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
          {[img1, img2, img3, img4, img5].map((src, index) => (
            <SwiperSlide key={index} className="shop-slide">
              <img src={src} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="blur-overlay-container">
          <div className="blur-overlay-top">
            <Link to="/product" className="blur-block top-left">
              <p>163</p>
              <h4>ХСЗР</h4>
              <p>Обеспечте защиту ваших культур</p>
            </Link>
            <Link to="/product" className="blur-block top-right">
              <p>24</p>
              <h4>Удобрения</h4>
              <p>Потдерживайте почву необходимыми элементами питания</p>
            </Link>
          </div>
          <div className="blur-overlay-bottom">
            <Link to="/product" className="blur-block long bottom-right">
              <p>19</p>
              <h4>Посевной материал</h4>
              <p>Запаситесь качественными семенами заранее</p>
            </Link>
            <Link to="/product" className="blur-block short bottom-left">
              <p className="text-left">8</p>
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
      {/* Горизонтальная прокрутка */}
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="scroll-item">
          <div className="circle-info-container">
            <img src={circle1} alt="Circle 1" className="circle-svg" />
            <div className="circle-text">
              <h3>Позитивных отзывов</h3>
              <p>Нас любят, к нам возвращаются</p>
              <h3>О нас</h3>
              <p>
                Компания "ASATRIAN TRADING GROUP" предлагает фермерским
                хозяйствам и крупным агропредприятиям широкий ассортимент
                химических средств защиты растений (ХСЗР), удобрений и посевного
                материала от ведущих производителей. Мы являемся официальным
                дилером многих известных торговых брендов, что гарантирует
                качество и эффективность нашей продукции. Предоставляем полный
                пакет документов всей продукции на сайте.
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="circle-info-container">
            <img src={circle2} alt="Circle 2" className="circle-svg" />
            <div className="circle-text">
              <h3>Довольных клиентов</h3>
              <p>Более 1500 довольных клиентов нашим сервисом.</p>
              <h3>Наша миссия</h3>
              <p>
                Создать удобную и надежную платформу для сельхозпроизводителей,
                где каждый сможет найти все необходимое для успешного ведения
                агробизнеса. Мы понимаем важность своевременной и правильной
                защиты урожая, поэтому предлагаем только проверенные товары
                высокого качества.
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="circle-info-container">
            <img src={circle3} alt="Circle 3" className="circle-svg" />
            <div className="circle-text">
              <h3>Повторных покупок</h3>
              <p>
                Клиент ценит скорость, комфорт и отсутствие стресса которые мы
                ему предоставляем!
              </p>
              <h3>Почему выбирают нас:</h3>
              <p>
                Качество и надежность: сертифицированные товары от проверенных
                производителей.
                <p />
                Профессиональная поддержка: наши специалисты всегда готовы
                предоставить консультации по выбору и применению препаратов.
                <p />
                <p />
                Комфорт: доставка по всей Запорожской и Херсонской областях что
                позволяет вам получать необходимые товары прямо до двери вашего
                хозяйства. Мы стремимся к тому, чтобы ваши посевы были
                здоровыми, а урожай - богатым. Доверьтесь нашему опыту и
                профессионализму, и вы получите гарантированный результат.
                Оформите заказ прямо сейчас , вместе мы сделаем ваш агробизнес
                успешным и прибыльным!
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-item">
          <div className="circle-info-container">
            <img src={circle4} alt="Circle 4" className="circle-svg" />
            <div className="circle-text">
              <h3>Выполненных заказов</h3>
              <p>Уже более 10000 заказов доставлено к нашим клиентам.</p>
              <h3>Что мы предлагаем:</h3>
              <p>
                СЗР (средства защиты растений): широкий выбор гербицидов,
                фунгицидов и инсектицидов для защиты ваших культур.
                <p />
                Удобрения: минеральные и органические удобрения для повышения
                урожайности и улучшения качества почвы.
                <p />
                Посевной материал: высококачественные семена различных культур.
              </p>
            </div>
          </div>
        </div>

        {/* Добавьте дополнительные элементы по необходимости */}
      </div>
      {isCartOpen && <Cart onClose={closeCart} />}
      <Store />
    </>
  );
};

export default Shop;
