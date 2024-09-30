import React from 'react';
import Store from './Store';
import '../style/Contacts.css';
import Shkal from './Shkal';

const Contacts = () => {
  return (
    <>
    <div className="header">
    <div className="title-block"> 
          <h1>Контакты</h1>
          <p className="pod">На связи 24/7</p>
        </div>
        </div>
      <div className="contacts-container">
        <div className="contact-block">
          <h2>Офис в г. Мелитополь</h2>
          <div className="contact-details">
            <div>
              <p><strong>Адрес:</strong></p>
              <p>123112, Россия, г. Мелитополь, наб. Преображенская, д. 8, стр. 2 (Бизнес "Империя")</p>
            </div>
            <div>
              <p><strong>Телефон:</strong></p>
              <p><a href="tel:+79901242829" className='color pod'>+7 (990) 124 28 29</a></p>
            </div>
            <div>
              <p><strong>Почта:</strong></p>
              <p><a href="mailto:trading@asatag.com" >trading@asatag.com</a></p>
            </div>
          </div>
        </div>

        <div className="contact-block">
          <h2>Магазин «ASATAG»</h2>
          <div className="contact-details">
            <div>
              <p><strong>Адрес:</strong></p>
              <p>123112, Россия, г. Мелитополь, наб. Преображенская, д. 6, стр. 2</p>
            </div>
            <div>
              <p><strong>Телефон:</strong></p>
              <p><a href="tel:+79900960481"  className='color pod'>+7 (990) 096 04 81</a></p>
            </div>
            <div>
              <p><strong>Почта:</strong></p>
              <p><a href="mailto:trading@asatag.com"  >trading@asatag.com</a></p>
            </div>
          </div>
        </div>

        <div className="contact-block">
          <h2>Магазин «ASATAG»</h2>
          <div className="contact-details">
            <div>
              <p><strong>Адрес:</strong></p>
              <p>123112, Россия, г. Мелитополь, ул. Михайлова, д. 6, стр. 2 (Бизнес "Империя")</p>
            </div>
            <div>
              <p><strong>Телефон:</strong></p>
              <p><a href="tel:+79901242829"  className='color pod'>+7 (990) 124 28 29</a></p>
            </div>
            <div>
              <p><strong>Почта:</strong></p>
              <p><a href="mailto:trading@asatag.com" >trading@asatag.com</a></p>
            </div>
          </div>
        </div>

        <div class="partnership-form">
        <h2>Желаете стать нашим партнером?</h2>
  <form>
    <div class="form-container">
      <div class="form-fields">
        <div class="form-group">
          <label for="name">Имя Отчество</label>
          <input type="text" id="name" />
        </div>
        <div class="form-group">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
      </div>
      <button type="submit" class="submit-button">Отправить</button>
    </div>
    <p>Наш менеджер свяжется с Вами в ближайшее время.</p>
  </form>
</div>
      </div>
      <div className="employee-cards">
          <div className="card-container">
            <div className="employee-card">
              <img src="https://avatars.mds.yandex.net/get-ydo/2784159/2a0000017333a74882d57f6b35db4f9ddbca/diploma" alt="Employee Name" className='employee-img'/>
              <div className="employee-info">
                <h3>Архипова Елизавета
                Андреева</h3>
                <p className='pod'>fasfasfafasfsaf</p>
              </div>
            </div>
            <div className="employee-card">
              <img src="https://avatars.mds.yandex.net/get-ydo/2784159/2a0000017333a74882d57f6b35db4f9ddbca/diploma" alt="Employee Name" className='employee-img'/>
              <div className="employee-info">
                <h3>Архипова Елизавета
                Андреева</h3>
                <p  className='pod'>fasfasfafasfsaf</p>
              </div>
            </div>
            {/* Add more employee cards as needed */}
          </div>
        </div>
     
      <Store /> 
      <Shkal/> 
    </>
  );
};

export default Contacts;
