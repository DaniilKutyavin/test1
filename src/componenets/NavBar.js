import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import '../style/navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { CONTACTS_ROUTER, DELIVERY_ROUTER, NEWS_ROUTER, SHOP_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER, PRODUCT_ROUTER } from "../utils/consts";
import LogoWhite from '../img/Лого белый.svg';
import LogoScrolled from '../img/Лого цветной.svg';
import Ls from '../img/человек 500.svg';
import LoginForm from './LoginForm'; // Make sure this path is correct
import arrowRight from '../img/стрелка вниз.svg';
import bask from '../img/корзина белая 1.svg';
import Cart from './Cart'; // Make sure this path is correct

const NavBar = () => {
    const { user } = useContext(Context);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoginFormOpen, setIsLoginFormOpen] = useState(false); // State for showing the login form
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    const handleLoginClick = () => {
        setIsLoginFormOpen(true); // Show the login form
    };

    const closeLoginForm = () => {
        setIsLoginFormOpen(false); // Hide the login form
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isCartOpen, setIsCartOpen] = useState(false); // State for showing the cart

    const handleCartClick = () => {
        setIsCartOpen(true); // Show the cart
    };

    const closeCart = () => {
        setIsCartOpen(false); // Hide the cart
    };

    return (
        <>
            <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-content">
                    <div className="navbar-logo">
                        <Link to={SHOP_ROUTER}>
                            <img 
                                src={location.pathname === "/" ? (isScrolled ? LogoScrolled : LogoWhite) : LogoScrolled} 
                                alt="Logo" 
                                style={{ height: '70px', width: '300px' }} 
                            />
                        </Link>
                    </div>
                    <nav className="navbar-links">
                        <div className="catalog-wrapper" onClick={handleDropdownToggle}>
                            <a 
                                href="#catalog" 
                                className={isActive(PRODUCT_ROUTER) ? 'active-link' : ''}
                            >
                                Каталог товаров 
                                <img 
                                    src={arrowRight} 
                                    alt="Arrow" 
                                    className={`accordion-arrow ${isDropdownOpen ? 'open' : ''}`} 
                                />
                            </a>
                            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <Link to='/product'>ХСЗР</Link>
                                <Link to='/product'>Удобрения</Link>
                                <Link to='/product'>Посевной материал</Link>
                                <Link to='/buy'>Закупка культур</Link>
                            </div>
                        </div>
                        <Link to={DELIVERY_ROUTER} className={isActive(DELIVERY_ROUTER) ? 'active-link' : ''}>Доставка</Link>
                        <Link to={NEWS_ROUTER} className={isActive(NEWS_ROUTER) ? 'active-link' : ''}>Новости</Link>
                        <Link to={CONTACTS_ROUTER} className={isActive(CONTACTS_ROUTER) ? 'active-link' : ''}>Контакты</Link>
                    </nav>
                    <div className="navbar-user">
                        <img src={Ls} alt="User Icon" onClick={handleLoginClick} style={{ height: '40px', cursor: 'pointer', margin: '10px' }}  />
                    </div>
                </div>
            </header>
            {isLoginFormOpen && <LoginForm onClose={closeLoginForm} />}
        </>
    );
};

export default NavBar;

