import React, { useState } from 'react';
import '../style/Prod.css';
import bask from '../img/корзина белая 1.svg';
import iconProd from '../img/Образец ХСЗР на сайт.png';
import arrowDown from '../img/стрелка вниз.svg';
import Store from '../componenets/Store';

const Prod = () => {
    const [filtersOpen, setFiltersOpen] = useState({
        category: false,
        culture: false,
        manufacturer: false,
    });

    const toggleFilter = (filter) => {
        setFiltersOpen({
            ...filtersOpen,
            [filter]: !filtersOpen[filter],
        });
    };

    return (
        <>
            <div className="header">
                <h1>ХСЗР</h1>
                <p>Бесплатная доставка от 10.000 руб (Безнал +5%)</p>
            </div>
            <div className="wrapper">
                <div className="catalog-container">
                    {/* Левая секция с поиском и фильтрами */}
                    <div className="left-section">
                        <div className="filter-block">
                            <div className="search-bar">
                                <input type="text" placeholder="Поиск..." className="search-input" />
                            </div>
                            <div className="filter-section">
                                <h3 onClick={() => toggleFilter('category')}>
                                    Категория
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.category ? 'open' : ''}`} />
                                </h3>
                                {filtersOpen.category && (
                                    <div className="filter-content">
                                        <label>
                                            <input type="checkbox" /> Категория 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Категория 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Категория 3
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className="filter-section">
                                <h3 onClick={() => toggleFilter('culture')}>
                                    Культура
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.culture ? 'open' : ''}`} />
                                </h3>
                                {filtersOpen.culture && (
                                    <div className="filter-content">
                                        <label>
                                            <input type="checkbox" /> Культура 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Культура 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Культура 3
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className="filter-section">
                                <h3 onClick={() => toggleFilter('manufacturer')}>
                                    Производитель
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.manufacturer ? 'open' : ''}`} />
                                </h3>
                                {filtersOpen.manufacturer && (
                                    <div className="filter-content">
                                        <label>
                                            <input type="checkbox" /> Производитель 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 1
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 2
                                        </label>
                                        <label>
                                            <input type="checkbox" /> Производитель 3
                                        </label>
                                    </div>
                                )}
                            </div>
                            <button className="filter-cancel-button">Отмена</button>
                        </div>
                    </div>

                    {/* Правая секция с карточками продуктов */}
                    <div className="right-section">
                        <div className="product-grid">
                            {Array(6).fill().map((_, index) => (
                                <a href={`/product/${index + 1}`} className="product-card" key={index}>
                                <img src={iconProd} alt="Product" className="product-image" />
                                <h4 className="product-title">Торнадо 500</h4>
                                <p className="product-description">Протиоконазол, 40 г/л + флудиоксонил, 30 г/л + азоксистробин, 15 г/л</p>
                                <p className="product-volume">10 л</p>
                                <div className="price-container">
                                    <span className="product-price">1000 ₽</span>
                                    <img src={bask} alt="Cart" className="cart-icon" />
                                </div>
                            </a>
                            ))}
                        </div>

                        {/* Пагинация */}
                        <div className="pagination">
                            <button className="pagination-arrow">←</button>
                            <button className="pagination-arrow">→</button>
                        </div>
                    </div>
                </div>
            </div>
            <Store />
        </>
    );
};

export default Prod;
