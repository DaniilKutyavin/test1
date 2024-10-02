import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/auth.css';
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = ({ onClose }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        captcha: '',
        subscribe: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isRegistering ? 'Форма регистрации' : 'Форма авторизации');
    };

    const handleRegisterClick = () => {
        setIsRegistering(true);
    };

    const handleLoginClick = () => {
        setIsRegistering(false);
    };

    const handleCaptchaChange = (value) => {
        setFormData(prevData => ({
            ...prevData,
            captcha: value
        }));
    };

    return (
        <div className="login-form-overlay">
            <div className="login-form"> 
                <div className="close-btnn" onClick={onClose}>✖</div>
                <h1 className='loginotst'>{isRegistering ? 'Создать учётную запись' : 'Вход'}</h1>
                <p className="instruction-text" dangerouslySetInnerHTML={{
                    __html: isRegistering 
                        ? '<h3>Скидка каждому новому покупателю 500 руб.!</h3> <p><h3>Что необходимо для того, чтобы получить скидку?</h3></p> Зарегистрироваться на сайте. Добавить в корзину товары на сумму от 35000 руб <p></p>Ввести подарочный промо-код из письма, полученного при регистрации' 
                        : 'Если у вас есть учётная запись на нашем сайте, пожалуйста, авторизируйтесь.'
                }} />
                
                <form onSubmit={handleSubmit} className="login-form-content">
                    {isRegistering && (
                        <>
                            <h1>Личная информация</h1>
                            <div className="email-password-row">
                            <div className="form-field">
                                <label htmlFor="fullName">ФИО:</label>
                                <input
                                className='log'
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input
                            className='log'
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            
                        </div>
                        </div>
                            <div className="form-field">
                                <label>
                                    <input
                                    className="sub"
                                        type="checkbox"
                                        name="subscribe"
                                        checked={formData.subscribe}
                                        onChange={handleCheckboxChange}
                                        
                                    />
                                    Подписаться на рассылку
                                </label>
                            </div>
                            
                        </>
                    )}

                    <h1>{isRegistering ? 'Информация для авторизации': ''}</h1>
                    <div className="email-password-row">
                    <div className="form-field">
                            <label htmlFor="password">Пароль:</label>
                            <input
                            className='log'
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                                <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                                <input
                                className='log'
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                    </div>

                    {isRegistering && (
                        <>
                        <div className="email-password-row">
                            <div className="form-field">
                                <label htmlFor="confirmPassword">Введите код с картинки:</label>
                                <input
                                   className='log'
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="captcha">Здесь картинка будет потом</label>
                                <input className='log'/>
                            </div>
                        </div>
                        </>
                    )}
                    
                    <button type="submit" className="submit-buttonn">{isRegistering ? 'Создать' : 'Войти'}</button>
                </form>

                {!isRegistering && (
                    <>
                        <h1>Создать учетную запись</h1>
                        <p className="form-description">
                            Создав учётную запись на нашем сайте, вы будете тратить
                            меньше времени на оформление заказа, сможете хранить
                            несколько адресов доставки, отслеживать состояние
                            заказов, а также многое другое. 
                        </p>
                        <button className="submit-buttonn" onClick={handleRegisterClick}>Создать</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
