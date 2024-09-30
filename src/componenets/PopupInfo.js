import React from 'react';
import '../style/PopupInfo.css';
import iconProd from '../img/Образец ХСЗР на сайт.png'; // Импортируем изображение

const products = [
  {
    name: 'Фумигант «Флаггард»',
    price: 'От 30000р',
    image: iconProd, // Используем одно изображение
  },
  {
    name: 'Адъювант «Адью»',
    price: 'От 50000р',
    image: iconProd, // Используем одно изображение
  },
  {
    name: 'Инсектицид «Аспид»',
    price: 'От 100000р',
    image: iconProd, // Используем одно изображение
  },
];

const PopupInfo = ({ onClose }) => {
  return (
    <div className="popup-info">
      <button className="close-button" onClick={onClose}>×</button>
      <h4 className="popup-title">ПОДАРОК</h4>
      <p className="popup-description">
        Заказывайте и получайте подарочные СЗР в зависимости от суммы заказа. 
        Акция не распространяется на товары уже с включенной скидкой и действует только при заказе на сайте!
        Если ваш заказ превышает 100.000р вы сможете выбрать один из выигранных подарков.
      </p>
      <div className="popup-products">
        {products.map((product, index) => (
          <div className="product-itemm" key={index}>
            <img src={product.image} alt={product.name} className="product-imagee" />
            <div className="product-info">
              <h5>{product.name}</h5>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupInfo;
