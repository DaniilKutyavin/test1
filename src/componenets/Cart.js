import React from 'react';
import '../style/Cart.css'; // Import the styles for the cart
import iconProd from '../img/Образец ХСЗР на сайт.png';

const Cart = ({ onClose }) => {
    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-icon" onClick={onClose}>✖</span>
                <h2 className="cart-title">Заказ</h2>

                {/* Product Card */}
                <div className="cart-item">
                    <img src={iconProd} alt="Product" className="cart-item-image" />
                    <div className="cart-item-info">
                        <p className="product-title">Торнадо 540</p>
                        <p className="product-description">Изопропиламинная соль глифосата кислоты, 500 г/л к-ты, 10 л.</p>
                        <div className="quantity-controls">
                            <button className="quantity-button">-</button>
                            <span className="quantity">1</span>
                            <button className="quantity-button">+</button>
                            <span className="pproduct-price">Цена: <strong>1000 Р</strong></span>
                        </div>
                    </div>
                </div>

                <div className="total">
                    <p>Итоговая сумма: <strong>1000 Р</strong></p>
                </div>

                <h3 className="section-title">Данные</h3>
                <label>ФИО</label>
                <input type="text" className='intext'/>
                <label>Телефон</label>
                <input type="tel" className='intext'/>
                
                <h3 className="section-title">Доставка</h3>
                <label>Город</label>
                <input type="text" className='intext' />
                <label>Почта</label>
                <input type="email" className='intext'/>

                <h3 className="section-title">Способ оплаты</h3>
                <div className="payment-options">
                    <label><input type="radio" name="payment" className='intext'/> Наличными курьеру</label>
                    <label><input type="radio" name="payment" className='intext'/> Онлайн на сайте</label>
                    <label><input type="radio" name="payment" className='intext'/> Банковский перевод</label>
                </div>

                <h3 className="section-title">Комментарий</h3>
                <label>Промокод</label>
                <input type="text" className='intext' />
                <label>Комментарий</label>
                <textarea className='intext'></textarea>

                <button className="order-button">Заказать</button>
            </div>
        </div>
    );
};

export default Cart;
