import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = ({ cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">The Generics</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#store">STORE</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#cart" className="cart-holder">
            Cart <span className='cart-number'>{cartCount}</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
