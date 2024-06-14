import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Inicio = ({ handleShow }) => {
  return (
    <Jumbotron className="text-center mt-5">
      <Container>
        <h1>Bienvenido a Anuncios</h1>
        <p>
          Esta es tu plataforma para crear y gestionar cualquier tipo de anuncio. 
          Aquí puedes publicar anuncios de venta, compra, servicios, eventos y mucho más.
        </p>
        <Button variant="primary" onClick={handleShow}>
          Crear Nuevo Anuncio
        </Button>
      </Container>
    </Jumbotron>
  );
};

Inicio.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default Inicio;
