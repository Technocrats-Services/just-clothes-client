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
            <NavDropdown title="Item" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/item">
                Item
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/item/men">
                Men
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/item/women">
                Women
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              to="/about-us"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Nav.Link href="#link">About Us</Nav.Link>
            </Link>
            <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
              <Nav.Link href="#link">Privacy Policy</Nav.Link>
            </Link>
            <Link to="/term-and-conditions" style={{ textDecoration: "none" }}>
              <Nav.Link href="#link">Term & Conditions</Nav.Link>
            </Link>
            <Link to="/support" style={{ textDecoration: "none" }}>
              <Nav.Link href="#link">Support</Nav.Link>
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
