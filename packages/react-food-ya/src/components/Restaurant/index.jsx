import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { VscVerified, VscHistory, VscStarFull } from 'react-icons/vsc';
import CardMenu from '../CardMenu';
import './style.scss';

function Restaurant() {
  const restaurantDescription = {
    name: 'Las Canastitas',
    type: 'Polleria',
    schedule: '16:30 p. m. - 22:30 p. m.',
    points: 4.5,
    img: {
      url: 'https://w7.pngwing.com/pngs/954/418/png-transparent-fried-chicken-chicken-as-food-drawing-buffalo-wing-chicken-food-animals-logo.png',
    },
    link: '#',
    menu: [
      {
        id: 0,
        name: '1 Pollo',
        price: 's/54',
        description: 'pollo, papas y ensalada',
        stars: 5,
        img: {
          url: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
        },
        link: '#',
      },
      {
        id: 1,
        name: '1/2 Pollo',
        price: 's/28',
        stars: 4,
        description: '1/2 pollo, papas y ensalada',
        img: {
          url: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
        },
        link: '#',
      },
      {
        id: 2,
        name: '1/4 Pollo',
        price: 's/16',
        stars: 4,
        description: '1/4 pollo, papas y ensalada',
        img: {
          url: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
        },
        link: '#',
      },
      {
        id: 3,
        name: '1l de chicha',
        price: 's/15',
        description: '1l de chicha natural',
        stars: 5,
        img: {
          url: 'https://wongfood.vteximg.com.br/arquivos/ids/268644-1000-1000/535911-1.jpg',
        },
        link: '#',
      },
      {
        id: 4,
        name: 'Ensalada',
        price: 's/12',
        description: 'Ensalada de palta, lechuga, zanahoria y tomate',
        stars: 4,
        img: {
          url: 'https://i.ibb.co/yhbYvNG/img-1.jpg',
        },
        link: '#',
      },
    ],
  };
  const menuRestaurant = restaurantDescription.menu;
  const listMenu = menuRestaurant.map((contact) => (
    // eslint-disable-next-line max-len
    <CardMenu img={contact.img} name={contact.name} price={contact.price} description={contact.description} key={contact.id} />
  ));

  return (
    <Container fluid className="restaurant-section">
      <Row>
        <Col lg={3}>
          <div className="infoRestaurant">
            <h1>{restaurantDescription.name}</h1>
            <img src={restaurantDescription.img.url} alt="" />
            <ul className="ulDescription">
              <li>
                <VscVerified />
                {restaurantDescription.type}
              </li>
              <li>
                <VscHistory />
                {restaurantDescription.schedule}
              </li>
              <li>
                <VscStarFull />
                {restaurantDescription.points}
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={9}>
          <div className="divMenu">
            <h4>
              Menú de
              {' '}
              {restaurantDescription.name}
            </h4>
            <Container fluid>
              <Row>{listMenu}</Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Restaurant;
