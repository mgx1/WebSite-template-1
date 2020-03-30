import React from 'react';
import { Navbar , Nav , Container } from 'react-bootstrap';
import './style.css';

function Area1() {
  return (
    <>
      <Navbar id="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#"><img id="logo-navbar" src="https://image.flaticon.com/icons/svg/2729/2729252.svg" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#">Option1</Nav.Link>
            <Nav.Link href="#">Option2</Nav.Link>
            <Nav.Link href="#">Option3</Nav.Link>
            <Nav.Link href="#">Option4</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="area1">
        <br />
        <div id="nav">
          <ul>
            <li><a href="#">Option1</a></li>
            <li><a href="#">Option2</a></li>
            <li><img id="logo-ul" src="https://image.flaticon.com/icons/svg/2729/2729270.svg" /></li>
            <li><a href="#">Option3</a></li>
            <li><a href="#">Option4</a></li>
          </ul>
        </div>

        <br />

        <div id="explic-text">
          <h4>This is a WebSite template.</h4>
          <h4>Created By Carlos A.</h4>
        </div>


      </div>
    </>
  );
}

export default Area1;