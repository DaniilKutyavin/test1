import React from 'react';
import '../style/footer.css';
import LogoScrolled from '../img/Group.svg';
import Ls from '../img/человек 500.svg';
import tg from '../img/телеграм.svg';
import vk from '../img/Вконтакте.svg';

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
          © 2024 ASATAG. Все права защищены.&emsp;&emsp;&emsp;&emsp; Политика обработки персональных данных
        </p>
      </div>

      <div className="right">
        <ul className="links">
          <li><a href="/delivery">Доставка</a></li>
          <li><a href="/news">Новости</a></li>
          <li><a href="/contacts">Контакты</a></li>
          
        </ul>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <p>&emsp;</p>
        <div className="social-media">
        ежедневно | 8:00 — 17:00 &emsp;&emsp;&emsp;&emsp;
          <img src={Ls} alt="Social" className="social-icon" />
          <img src={tg} alt="Telegram" className="social-icon" />
          <img src={vk} alt="VK" className="social-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
