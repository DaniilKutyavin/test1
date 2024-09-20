import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Glav from '../componenets/Glav';
import Delivery from '../componenets/Delivery';
import News from '../componenets/News';
import Newss from '../componenets/Newss';
import Contacts from '../componenets/Contacts';
import { SHOP_ROUTER, NEWS_ROUTER, DELIVERY_ROUTER, CONTACTS_ROUTER } from '../utils/consts';

const Shop = () => {
  const location = useLocation();
  const { id } = useParams(); // Получаем параметр id

  const renderComponent = () => {
    switch (location.pathname) {
      case NEWS_ROUTER:
        return <News />;
      case `${NEWS_ROUTER}/${id}`: // Проверка пути с параметром id
        return <Newss id={id} />; // Передаем id как пропс в компонент News
      case SHOP_ROUTER:
        return <Glav />;
      case DELIVERY_ROUTER:
        return <Delivery />;
      case CONTACTS_ROUTER:
        return <Contacts />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default Shop;
