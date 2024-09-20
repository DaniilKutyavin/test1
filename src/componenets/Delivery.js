import React from 'react';
import '../style/delivery.css';
import Store from './Store';
import mapImage from '../img/карта.svg';
import iconSite from '../img/компьютер.svg';
import iconTelegram from '../img/чат.svg';
import iconPhone from '../img/по телефону.svg';  
import iconApp from '../img/в приложении.svg';
import icon1 from '../img/icon1.svg';
import icon2 from '../img/icon2.svg';
import icon3 from '../img/icon3.svg';
import iconBank from '../img/банковский перевод.svg';
import iconCash from '../img/наличными.svg';  
import iconCard from '../img/картой.svg';
import iconKur from '../img/курьером.svg';
import iconPoch from '../img/почтой.svg';  
import iconPred from '../img/предзаказ.svg';
const Delivery = () => {
  return (
    <>
    <div className="header">
    <h1>Доставка</h1>
    <p>Вы можете получить доставку в течение 3х дней или оформить заказ заранее на желаемую дату!</p>
  </div>
  <div className="delivery-container">
        <div className="text-section">
          <h2>Доставляем быстро и без стресса для клиента</h2>
          <h3>Мы контролируем качество</h3>
          <p>Вы получаете только оригинальную сертифицированную продукцию.</p>
          <p>В России существует реальная проблема фальсификации. 30% рынка СНГ – поддельные продукты. Обеспечим оригинальными и сертифицированными товарами с прозрачной ценой – наше задание.</p>
          <p>Рабочее время: <span className='working-hours'>с 09:00 до 17:00</span></p>
        </div>

        <div className="map-section">
          <img src={mapImage} alt="Карта России" />
        </div>
      </div>
      
      <div className="container">
        <div className="block">
          <div className="con">
            <div className="left-half">
              <div className="top-block"><h2>Как сделать заказ?</h2> <p>Выберете самы удобный способ для Вас
              </p></div>
              <div className="bottom-block"><img src={icon1}/></div>
            </div>
            <div className="right-half">
              <div className="window-block"><img src={iconSite}/>На сайте</div>
              <div className="window-block"><img src={iconTelegram}/>В telegram чате</div>
              <div className="window-block"><img src={iconPhone}/>По телефону </div>
              <div className="window-block"><img src={iconApp}/>В мобильном приложении</div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="con">
            <div className="left-half">
              <div className="top-block"><h2>Оплата</h2> <p>Убедитесь что стоимость вашего заказа состовляет не ниже 10000 рублей.</p></div>
              <div className="bottom-block"><img src={icon3}/></div>
            </div>
            <div className="right-half">
              <div className="window-block"><img src={iconCash}/>Наличыми</div>
              <div className="window-block"><img src={iconCard}/>Оплата картой</div>
              <div className="window-block"><img src={iconBank}/>Безналичный расчет</div>
              <div className="window-block"></div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="con">
            <div className="left-half">
              <div className="top-block"><h2>Как получить заказ?</h2> <p>Среднее время доставки составляет 3 дня
              </p></div>
              <div className="bottom-block"><img src={icon2}/></div>
            </div>
            <div className="right-half">
              <div className="window-block"><img src={iconKur}/>Курьером</div>
              <div className="window-block"><img src={iconPoch}/>Доставка почтой</div>
              <div className="window-block"><img src={iconPred}/>Предзаказ на назначеную дату</div>
              <div className="window-block"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer-container">
  <div className="disclaimer-header">
    <h2>Ограничение гарантий и ответственности</h2>
  </div>
  <div className="disclaimer-body">
    <p>Компания «ASATAG» не может предусмотреть все риски, которые могут возникнуть при использовании продукта, который вы приобрели.</p>
    <p><strong>ВНИМАНИЕ!!! ПЕРЕД ИСПОЛЬЗОВАНИЕМ ЛЮБОГО ПРОДУКТА ВНИМАТЕЛЬНО ЧИТАЙТЕ ИНСТРУКЦИЮ!</strong></p>
    <p>Такие риски могут привести к неэффективности продукта, нестандартными методами ведения сельскохозяйственных работ, присутствием
других компонентов, способом использования или другими неизвестными. Такие риски могут быть связаны с погодными условиями,
состоянием почвы, выходом за пределы участка использования. все риски, которые могут возникнуть при использовании продукта,
который вы приобрели.
</p>
    <p>Компания «ASATAG» не берет на себя ответственности за такие риски.
Когда покупатель покупает или использует тот или иной препарат повреждения урожая или повреждения нецелевых культур или растений,
факторами, которые находятся вне контроля нашей компании.</p>

 <p>Продавец ни в коем случае не несет ответственности за любые побочные, косвенные
или особые убытки, возникшие и имеющий соответствующий сертификат качества.
</p>
  </div>
</div>
      <Store />

    </>
  ); 
};

export default Delivery;
