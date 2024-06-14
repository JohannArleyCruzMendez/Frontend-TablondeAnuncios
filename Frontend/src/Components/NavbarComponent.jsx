import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavbarComponent = ({ handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Anuncios</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/home">Anuncios</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleShow}>Crear Anuncio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default NavbarComponent;
