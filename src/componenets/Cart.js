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
                    <div className="cart-item-info">
                        <p className="product-title">Торнадо 540</p>
                        <p className="product-descriptionn">Изопропиламинная соль глифосата кислоты, 500 г/л к-ты</p> 
                        <p className='obem'>10 л.</p>
                        <div className="quantity-controls">
                            <button className="quantity-button">-</button>
                            <span className="quantity">1</span>
                            <button className="quantity-button">+</button>
                            <span className='price-cart'>13000 ₽</span>
                        </div>
                    </div>
                    <img src={iconProd} alt="Product" className="cart-item-image" />
                </div>

                <div className="sum-section">
                    <p className="sum-label">Сумма:</p>
                    <div className="sum-details non-cash">
                        <span className="cash-amount">13000 ₽&ensp; </span>
                        <span className="cash-method"> Наличный расчет</span>
                    </div>
                    <div className="sum-details non-cash">
                        <span className="non-cash-amount">13650 ₽&ensp; </span>
                        <span className="non-cash-method"> Безналичный расчет</span>
                    </div>
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
