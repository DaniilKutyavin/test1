import React, { useContext, useState, useEffect } from "react";
import '../style/footer.css';
import LogoScrolled from '../img/лого чистое.svg';
import Ls from '../img/человек 500.svg';
import tg from '../img/телеграм.svg';
import vk from '../img/Вконтакте.svg';
import a from '../img/a.svg';
import s from '../img/s.svg';
import t from '../img/t.svg';
import g from '../img/g.svg';
import { Link, useLocation } from 'react-router-dom';
import privacyPolicy from '../file/Политика асатаг.pdf';
import LoginForm from './LoginForm'; 

const Footer = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const handleLoginClick = () => {
    setIsLoginFormOpen(true); // Show the login form
};

const closeLoginForm = () => {
    setIsLoginFormOpen(false); // Hide the login form
};
  return (
    <>
    <footer className="footer">
      <div className="left">
      <div className="logo-animation">
            <span className="logo-letter"><img src={a} alt="a" /></span>
            <span className="logo-letter"><img src={s} alt="s" /></span>
            <span className="logo-letter"><img src={a} alt="a" /></span>
            <span className="logo-letter"><img src={t} alt="t" /></span>
            <span className="logo-letter"><img src={a} alt="a" /></span>
            <span className="logo-letter"><img src={g} alt="g" /></span>
          </div>

        
        <div className="contact-info">
          <p>+7 (990) 096 04 81</p>
          <p>+7 (990) 096 04 81</p>
          <p>example@mail.com</p>
        
        </div>
        <p className="copyright">
         <span> © 2024 ASATAG. Все права защищены.</span> &emsp;&emsp;&emsp;&emsp; <a href={privacyPolicy} download>
            Политика обработки персональных данных
          </a>
        </p>
      </div>

      <div className="right">
        <ul className="links">
        <Link to='/delivery'>Доставка</Link>
        <Link to='/news'>Новости</Link>
        <Link to='/contacts'>Контакты</Link>
       
          
        </ul>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <div className="social-media">
        <span className="timefoot">ежедневно | 8:00 — 17:00</span> &emsp;&emsp;&emsp;&emsp;
          <img src={Ls} alt="Social" className="social-icon"  onClick={handleLoginClick} />
          <a href="https://t.me/+RmKsDFeoLSk3NjU6" target="_blank" rel="noopener noreferrer">
        <img src={tg} alt="Telegram" className="social-icon" />
    </a>
          <a href="https://vk.com/asatag" target="_blank" rel="noopener noreferrer">
        <img src={vk} alt="VK" className="social-icon" />
    </a>
        </div>
      </div> 
    </footer>
     {isLoginFormOpen && <LoginForm onClose={closeLoginForm} />}
     </>
  );
};

export default Footer;
