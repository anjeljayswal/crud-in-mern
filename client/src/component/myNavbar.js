import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const myNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/" className="ms-2">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="ms-2">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="ms-2">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login" className="ms-2">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Registration</Nav.Link>
          </Nav>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default myNavbar;
