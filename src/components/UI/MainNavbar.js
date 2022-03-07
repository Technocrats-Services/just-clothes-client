import image from "../res/logo.png";
import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    // <nav className="navbar navbar-light bg-light">
    //   <a className="navbar-brand p-1 ms-1" href="/">
    //     <img
    //       src={image}
    //       width="150"
    //       height="30"
    //       class="d-inline-block align-top"
    //       alt=""
    //     />
    //   </a>
    // </nav>

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <a className="navbar-brand p-1 ms-1" href="/">
            <img
              src={image}
              width="150"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="#home" className="text-decoration-none">
                Home
              </Nav.Link>
            </Link>
            <Link to="/item" style={{ textDecoration: "none", color: "black" }}>
              <Nav.Link href="#link">Item</Nav.Link>
            </Link>
            <Link to="/item/men" style={{ textDecoration: "none" }}>
              <Nav.Link href="#link">Men</Nav.Link>
            </Link>
            <Link to="/item/women" style={{ textDecoration: "none" }}>
              <Nav.Link href="#link">Women</Nav.Link>
            </Link>
            <Link to="/">
              <Button variant="primary" className="ms-md-5">
                Go Back
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
