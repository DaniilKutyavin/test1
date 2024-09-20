import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/auth.css'; // Ensure the path is correct
import { REGISTRATION_ROUTER } from "../utils/consts";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = ({ onClose }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        captcha: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
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
                <div className="close-btn" onClick={onClose}>✖</div>
                <h2>{isRegistering ? 'Регистрация' : 'Вход'}</h2>
                <p className="instruction-text" dangerouslySetInnerHTML={{
                    __html: isRegistering 
                        ? '<h3>Скидка каждому новому покупателю 500 руб.! <p>Что необходимо для того, чтобы получить скидку?</p></h3>' 
                        : 'Если у вас есть учётная запись на нашем сайте, пожалуйста, авторизируйтесь.'
                }} />
                {isRegistering && (
                    <p className="promo-code-text">
                        Зарегистрироваться на сайте. Добавить в корзину товар на сумму от 10000 руб.
                        <p>Ввести подарочный промо-код из письма, полученного при регистрации</p>
                    </p>
                    
                )}
                <form onSubmit={handleSubmit} className="login-form-content">
                    <div className="form-row">
                        {isRegistering && (
                            <>
                                <div className="form-field">
                                    <label htmlFor="fullName">ФИО:</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </>
                        )}
                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Пароль:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {isRegistering && (
                            <div className="form-field">
                                <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        )}
                        {isRegistering && (
                            <div className="form-field">
                                <ReCAPTCHA
                                    sitekey="6LfnmkIqAAAAABqJSlyYuQhYznyW9w565sMqbtAk"
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                        )}
                    </div>
                    <button type="submit">{isRegistering ? 'Создать' : 'Войти'}</button>
                </form>
                {!isRegistering && (
                    <>
                    <p>Нету аккаунта? <Link className="no-style" onClick={handleRegisterClick}>Зарегистрируся!</Link> </p>
                    <p className="form-description">
                        Создав учётную запись на нашем сайте, вы будете тратить
                        меньше времени на оформление заказа, сможете хранить
                        несколько адресов доставки, отслеживать состояние
                        заказов, а также многое другое.
                    </p>
                    </>
                )}
                <div className="register-link">
   
</div>
            </div>
        </div>
    );
};

export default LoginForm;
