import React from 'react';
import { Container } from 'react-bootstrap';
import CustomButton from '../CustomButton';
import './style.scss';

function Banner() {
  return (
    <Container className="banner">
      <div className="banner-img" />
      <div className="banner-text">
        <h1>Food Ya!</h1>
        <p>Find your favourite food here!</p>
        <CustomButton content="Try here!" url="/register-selection" />
      </div>
    </Container>
  );
}

export default Banner;
