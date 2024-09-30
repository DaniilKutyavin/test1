import React from 'react';
import '../style/product.css';
import Store from '../componenets/Store';
import iconProd from '../img/Образец ХСЗР на сайт.png'; 
import arrowRight from '../img/стрелка вниз.svg'; // Import your custom arrow image
import bask from '../img/корзина белая 1.svg';
import Shkal from '../componenets/Shkal';

const ProductPage = () => {
    return (
        <>
            <div className="header">
            <div className="title-block"> 
                <h1>Торнадо 500</h1>
                <p className="pod">Водный раствор ВР.</p>
                </div>
            </div>

            <div className="productPage">
                <div className="backgroundText">ТОРНАДО 500</div>

                <div className="productCard">
                    <div className="productInfo">
                        <div className="textContent">
                            <p className="description">
                                Универсальный гербицид сплошного действия с повышенным содержанием изопропиламинной соли глифосата кислоты
                            </p>
                            <p className="highlightedInfo">
                                Изопропиламинная соль глифосата кислоты, 500 г/л к-ты
                            </p>
                            <div className="productVolume">
                                <span>10л</span>
                                <p className="producer">Производитель:</p>
                                <div className='sertif'>
    <p className="pdfLink">
        <spam className="dot"></spam> Свидетельство PDF 2.16 МБ
    </p>
    <p className="pdfLink">
        <spam className="dot"></spam> Презентация PDF 1.96 МБ
    </p>
</div>
                            </div>
                        </div>
                        <div className="productImageAndPrice">
                            <div className="productImage">
                                <img src={iconProd} alt="Торнадо 500" />
                            </div>
                            <div className="priceSection">
    <button className="priceButton">650 ₽</button>
    <button className="addToCartButton">
        <img src={bask} alt="Корзина" />
    </button>
</div>
                        </div>
                    </div>

                    <div className="accordionSection">
                        <details className="accordion">
                            <summary>Преимущества <img src={arrowRight} alt="Arrow" className="accordion-arrow" /></summary>
                            <p>пофыволдпофылдоплдфыопофыпоыфопофофыопофпоофв ыадлофыдлалдоыфдлоадофыдаоыфоаыфодао флаотвфтпиловиопиоиывопифловыиопливыолип ртфыатофыа</p>
                        </details>
                        <details className="accordion">
                            <summary>Регламент применения <img src={arrowRight} alt="Arrow" className="accordion-arrow" /></summary>
                            <p>пофыволдпофылдоплдфыопофыпоыфопофофыопофпоофв ыадлофыдлалдоыфдлоадофыдаоыфоаыфодао флаотвфтпиловиопиоиывопифловыиопливыолип ртфыатофыа</p>
                        </details>
                        <details className="accordion">
                            <summary>Описание <img src={arrowRight} alt="Arrow" className="accordion-arrow" /></summary>
                            <p>пофыволдпофылдоплдфыопофыпоыфопофофыопофпоофв ыадлофыдлалдоыфдлоадофыдаоыфоаыфодао флаотвфтпиловиопиоиывопифловыиопливыолип ртфыатофыа</p>
                        </details>
                        <details className="accordion">
                            <summary>Упаковка и хранение <img src={arrowRight} alt="Arrow" className="accordion-arrow" /></summary>
                            <p>пофыволдпофылдоплдфыопофыпоыфопофофыопофпоофв ыадлофыдлалдоыфдлоадофыдаоыфоаыфодао флаотвфтпиловиопиоиывопифловыиопливыолип ртфыатофыа</p>
                        </details>
                    </div>
                </div>
            </div>
            <Store />
            <Shkal/>
        </>
    );
};

export default ProductPage;
