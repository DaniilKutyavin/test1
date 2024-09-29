import React, { useState } from 'react';
import '../style/Buy.css';
import arrowDown from '../img/стрелка вниз.svg';
import Store from '../componenets/Store';
import Shkal from '../componenets/Shkal';

const Prod = () => {
    const [filtersOpen, setFiltersOpen] = useState({
        category: true,
        culture: true,
        manufacturer: true,
    });

    const [expandedBlocks, setExpandedBlocks] = useState({});

    const toggleFilter = (filter) => {
        setFiltersOpen({
            ...filtersOpen,
            [filter]: !filtersOpen[filter],
        });
    };

    const toggleExpand = (id) => {
        setExpandedBlocks({
            ...expandedBlocks,
            [id]: !expandedBlocks[id],
        });
    };

    return (
        <>
            <div className="header">
            <div className="title-block">
                <h1>Закупка С/Х культур</h1>
                <p>Продайте по максимально выгодным ценам</p>
                </div>
            </div>
            <div className="wrapperr">
                <div className="catalog-containerr">
                    <div className="left-section">
                        <div className="filter-block">
                            <div className="search-bar">
                                <input type="text" placeholder="Поиск..." className="search-input" />
                            </div>
                            <div className="filter-section">
                                <h2 onClick={() => toggleFilter('category')}>
                                    Категория
                                    <img src={arrowDown} alt="Arrow Down" className={`filter-arrow ${filtersOpen.category ? 'open' : ''}`} />
                                </h2>
                                {filtersOpen.category && (
                                    <div className="filter-content">
                                       <input type="checkbox" class="custom-checkbox" id="hhapppy" name="happy" value="yes"/>
                                        <label for="hhapppy">Категория 1</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy2" name="happy" value="yes"/>
                                        <label for="hhapppy2">Категория 2</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy3" name="happy" value="yes"/>
                                        <label for="hhapppy3">Категория 3</label>
                                        <p/>
                                        <input type="checkbox" class="custom-checkbox" id="hhapppy4" name="happy" value="yes"/>
                                        <label for="hhapppy4">Категория 4</label>
                                    </div>
                                )}
                            </div>
                            <button className="filter-cancel-button">Отмена</button>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="product-list">
                            {[1, 2, 3].map(id => (
                                <div key={id} className="product-item">
                                    <div className="product-header" onClick={() => toggleExpand(id)}>
                                        <div className="product-title-price">
                                            <span className="product-title">Название продукта {id}</span>
                                            <span className="product-pricee">Цена {id}</span>
                                        </div>
                                        <img src={arrowDown} alt="Arrow Down" className={`expand-arrow ${expandedBlocks[id] ? 'open' : ''}`} />
                                    </div>
                                    {expandedBlocks[id] && (
                                        <div className="product-description">
                                            Описание продукта {id}
                                        </div>
                                    )}
                                    {expandedBlocks[id] && (
                                        <button className="sell-button">Продать</button>
                                    )}
                                    <div className="divider"></div>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Store />
            <Shkal/>
        </>
    );
};

export default Prod;
