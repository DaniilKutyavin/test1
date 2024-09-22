import React from 'react';
import '../style/footer.css';
import LogoScrolled from '../img/лого чистое.svg';
import Ls from '../img/человек 500.svg';
import tg from '../img/телеграм.svg';
import vk from '../img/Вконтакте.svg';
import { Link, useLocation } from 'react-router-dom';
import privacyPolicy from '../file/Политика асатаг.pdf';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <img src={LogoScrolled} alt="Logo" className="logo" />
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
          <img src={Ls} alt="Social" className="social-icon" />
          <img src={tg} alt="Telegram" className="social-icon" />
          <img src={vk} alt="VK" className="social-icon" />
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
