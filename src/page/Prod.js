import React, { useState} from 'react';
import '../style/Prod.css';
import bask from '../img/корзина белая 1.svg';
import iconProd from '../img/Образец ХСЗР на сайт.png';
import arrowDown from '../img/стрелка вниз.svg';
import Store from '../componenets/Store';
import Shkal from '../componenets/Shkal';

const Prod = () => {
    const [isInfoBlockVisible, setIsInfoBlockVisible] = useState(true);
    const [filtersOpen, setFiltersOpen] = useState({
        category: true,
        culture: true,
        manufacturer: true,
    });
    
    const [currentPage, setCurrentPage] = useState(1); // Добавляем состояние текущей страницы
    const totalPages = 4; // Общее количество страниц

    const toggleFilter = (filter) => {
        setFiltersOpen({
            ...filtersOpen,
            [filter]: !filtersOpen[filter],
        });
    };

    const closeInfoBlock = () => {
        setIsInfoBlockVisible(false);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
  

    return (
        <>
            <div className="header">
    <div className="title-block">
        <h1>ХСЗР</h1>
        <p className='pod'>Обеспечьте защиту Ваших культур</p>
    </div>
    
    {isInfoBlockVisible && (
                    <div className="info-block">
                        <span className="exclamation">!</span>
                        <div className="info-text">
                            <p>1.Бесплатная доставка от 35000 руб</p>
                            <p>2.По безналичному расчету к стоимости ХСЗР добавляется 5% в корзине автоматически подтянутся суммы после добавления товара</p>
                        </div>
                        <button className="close-btn" onClick={closeInfoBlock}>&times;</button>
                    </div>
                )}
</div>

            <div className="wrapperr">
                <div className="catalog-containerr full-width">
                    {/* Левая секция с поиском и фильтрами */}
                    <div className="left-section">
                        <div className="filter-block">
                        <div className="search-bar">
    <input 
        type="text" 
        placeholder="Поиск..." 
        className="search-input" 
    />
    <span className="search-icon">&#128269;</span> {/* HTML код значка лупы */}
</div>
                            <div className="filter-section">
                                <h2 onClick={() => toggleFilter('category')}>
                                    Категория
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.category ? 'open' : ''}`} />
                                </h2>
                                {filtersOpen.category && (
                                    <div className="filter-content" >
                                        <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes"/>
                                        <label for="happy">Категория 1</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happy2" name="happy" value="yes"/>
                                        <label for="happy2">Категория 2</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happy3" name="happy" value="yes"/>
                                        <label for="happy3">Категория 3</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happy4" name="happy" value="yes"/>
                                        <label for="happy4">Категория 4</label>
                                       
                                    </div>
                                )}
                            </div>
                            <div className="filter-section">
                                <h2 onClick={() => toggleFilter('culture')}>
                                    Культура
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.culture ? 'open' : ''}`} />
                                </h2>
                                {filtersOpen.culture && (
                                    <div className="filter-content">
                                        <input type="checkbox" class="custom-checkbox" id="happpy" name="happy" value="yes"/>
                                        <label for="happpy">Культура 1</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happpy2" name="happy" value="yes"/>
                                        <label for="happpy2">Культура 2</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happpy3" name="happy" value="yes"/>
                                        <label for="happpy3">Культура 3</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="happpy4" name="happy" value="yes"/>
                                        <label for="happpy4">Культура 4</label>
                                    </div>
                                )}
                            </div>
                            <div className="filter-section">
                                <h2 onClick={() => toggleFilter('manufacturer')}>
                                    Производитель
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.manufacturer ? 'open' : ''}`} />
                                </h2>
                                {filtersOpen.manufacturer && (
                                    <div className="filter-content">
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy" name="happy" value="yes"/>
                                        <label for="hhapppy">Производитель 1</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy2" name="happy" value="yes"/>
                                        <label for="hhapppy2">Производитель 2</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy3" name="happy" value="yes"/> 
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy4" name="happy" value="yes"/>
                                        <label for="hhapppy4">Производитель 4</label>
                                      
                                    </div>
                                )}
                            </div>
                            <button className="filter-cancel-button">Очистить</button>
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
                                <p className="product-volume pod">10 л</p>
                                <div className="price-container">
                                    <span className="product-price">1000 ₽</span>
                                    <img src={bask} alt="Cart" className="cart-icon" />
                                </div>
                            </a>
                            ))}
                        </div>

                        {/* Пагинация */}
                        <div className="pagination">
                            <button className="pagination-arrow" onClick={() => handlePageChange(currentPage - 1)}>
                                <img src={arrowDown} alt="Previous"  style={{ transform: 'rotate(90deg)' }} />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`pagination-page ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <button className="pagination-arrow" onClick={() => handlePageChange(currentPage + 1)}>
                                <img src={arrowDown} alt="Next"  style={{ transform: 'rotate(-90deg)' }}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Shkal/>
            <Store />
        </>
    );
};

export default Prod;
