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
                            <table>
<tbody>
<tr>
<td>
<p align="center"><strong>Норма расхода, л/га</strong></p>
</td>
<td>
<p align="center"><strong>Культура</strong></p>
</td>
<td>
<p align="center"><strong>Вредный объект</strong></p>
</td>
<td>
<p align="center"><strong>Срок ожидания (кратность обработок)</strong></p>
</td>
</tr>
<tr>
<td>
<p align="center">0,1</p>
</td>
<td rowspan="2">
<p>Пшеница яровая и озимая</p>
</td>
<td>
<p>Хлебные жуки, блошки, цикадки</p>
</td>
<td>
<p align="center">28 (1)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,07</p>
</td>
<td>
<p>Клоп вредная черепашка, тли, пьявица</p>
</td>
<td rowspan="3">
<p align="center">28 (2)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,07 - 0,1</p>
</td>
<td>
<p>Ячмень</p>
</td>
<td>
<p>Злаковые мухи, стеблевые пилильщики</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,07</p>
</td>
<td>
<p>Овес</p>
</td>
<td>
<p>Пьявица</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,05 - 0,06</p>
</td>
<td>
<p>Горох, горох овощной</p>
</td>
<td>
<p>Гороховая плодожорка, гороховая зерновка, тли, клубеньковые долгоносики</p>
</td>
<td>
<p align="center">28 (1)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,05</p>
</td>
<td>
<p>Горчица (кроме на масло)</p>
</td>
<td>
<p>Рапсовый цветоед</p>
</td>
<td>
<p align="center">50 (1)</p>
</td>
</tr>
<tr>
<td rowspan="3">
<p align="center">0,05 - 0,07</p>
</td>
<td rowspan="2">
<p>Рапс</p>
</td>
<td>
<p>Рапсовый цветоед</p>
</td>
<td>
<p align="center">50 (2)</p>
</td>
</tr>
<tr>
<td>
<p>Крестоцветные блошки</p>
</td>
<td>
<p align="center">50 (1)</p>
</td>
</tr>
<tr>
<td>
<p>Лен-долгунец</p>
</td>
<td>
<p>Блошки</p>
</td>
<td>
<p align="center">- (1)</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p align="center">0,07</p>
</td>
<td>
<p>Люцерна</p>
</td>
<td>
<p>Долгоносики</p>
</td>
<td>
<p align="center">- (2)</p>
</td>
</tr>
<tr>
<td>
<p>Свекла сахарная</p>
</td>
<td>
<p>Свекловичные долгоносики, свекловичные блошки, тли</p>
</td>
<td>
<p align="center">20 (1)</p>
</td>
</tr>
<tr>
<td rowspan="2">
<p align="center">0,07 - 0,1</p>
</td>
<td>
<p>Свекла сахарная и кормовая</p>
</td>
<td rowspan="2">
<p>Луговой мотылек</p>
</td>
<td>
<p align="center">20 (1)</p>
</td>
</tr>
<tr>
<td>
<p>Кукуруза</p>
</td>
<td>
<p align="center">55 (1)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,05 - 0,07</p>
</td>
<td rowspan="2">
<p>Пастбища, дикая растительность</p>
</td>
<td>
<p>Саранчовые (личинки младших возрастов)</p>
</td>
<td rowspan="2">
<p align="center">- (1)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,1 - 0,2</p>
</td>
<td>
<p>Саранчовые (личинки старших возрастов)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,15 - 0,2</p>
</td>
<td rowspan="2">
<p>Лук</p>
</td>
<td>
<p>Луковая муха</p>
</td>
<td rowspan="2">
<p align="center">25 (2)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,07 - 0,1</p>
</td>
<td>
<p>Трипсы</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,05</p>
</td>
<td>
<p>Томаты открытого грунта</p>
</td>
<td>
<p>Колорадский жук</p>
</td>
<td rowspan="2">
<p align="center">30 (1)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,05</p>
</td>
<td>
<p>Капуста</p>
</td>
<td>
<p>Капустная моль, капустная совка, капустная и репная белянки</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,2</p>
</td>
<td>
<p>Яблоня</p>
</td>
<td>
<p>Яблонная плодожорка, листовертки</p>
</td>
<td rowspan="2">
<p align="center">30 (2)</p>
</td>
</tr>
<tr>
<td>
<p align="center">0,16 - 0,24</p>
</td>
<td>
<p>Виноград</p>
</td>
<td>
<p>Гроздевая и двулетняя листовертки</p>
</td>
</tr>
</tbody>
</table>
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
