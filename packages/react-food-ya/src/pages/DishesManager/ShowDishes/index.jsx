/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import {
  Row,
} from 'react-bootstrap';
import { MenuManageContext } from '../../../context/menuManageContext';
import './style.scss';
import CardMenu from '../../../components/CardMenu';

function ShowDishes() {
  const { isLoading, menu } = useContext(MenuManageContext);

  return (
    <Row>
      {
        !isLoading && menu.map((dish) => (
          <CardMenu
            key={dish.id}
            stars={dish.stars}
            img={dish.img}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            value={dish.value}
          />
        ))
      }
    </Row>
  );
}
export default ShowDishes;
