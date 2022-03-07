import React from "react";
import { Link } from "react-router-dom";
import itemMenPhoto from "./res/itemMenPhoto.svg";
import itemWomenPhoto from "./res/itemWomenphoto.svg";

import { Col, Row, Container, Image, Button } from "react-bootstrap";
import Navbar from "./UI/navbar.js";
import MainNavbar from "./UI/MainNavbar";
import Footer from "./UI/footer.js";
const Item = () => {
  return (
    <>
      {/* <Navbar /> */}
      <MainNavbar />

      <Container className="mt-5 mb-5">
        <Row className="d-flex justify-content-left align-self-center">
          <Col className="d-flex flex-column justify-content-left align-self-center">
            <Image
              className="ms-auto me-auto"
              thumbnail={true}
              roundedCircle={true}
              src={itemMenPhoto}
            ></Image>
            <Link to="/item/men">
              <Button variant="outline-success" className="w-100 mt-3">
                Male
              </Button>
            </Link>
          </Col>
          <Col className="d-flex flex-column justify-content-left align-self-center">
            <Image
              className="ms-auto me-auto"
              thumbnail={true}
              roundedCircle={true}
              src={itemWomenPhoto}
            ></Image>
            <Link to="/item/women">
              <Button variant="outline-danger" className="w-100 mt-3">
                Female
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Item;
