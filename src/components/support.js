import React from "react";
import { Link } from "react-router-dom";
import itemMenPhoto from "./res/itemMenPhoto.svg";
import itemWomenPhoto from "./res/itemWomenphoto.svg";

import { Col, Row, Container, Image, Button } from "react-bootstrap";
import Navbar from "./UI/navbar.js";
import MainNavbar from "./UI/MainNavbar";
import Footer from "./UI/footer.js";
const support = () => {
  return (
    <>
      {/* <Navbar /> */}
      <MainNavbar />
      <div className="mx-3 my-5">
        <h2 className="text-center">For any quarries mail us at- <br><a href="mailto:justcloths.in@gmail.com">justcloths.in@gmail.com</a></br></h2>
      </div>
      
      <Footer />
    </>
  );
};

export default support;