import React from "react";
import { Col, Row, Button, Card, Container } from "react-bootstrap";
import styleExtra from "./CardTiles.module.css";
import "../../App.css";
const CardTiles = (props) => {
  // const styles = {
  //   card: {
  //     width: "320px",
  //     textAlign: "left",
  //     position: "relative",
  //     verticalAlign: "top",
  //     overflow: "hidden",
  //     display: "inline-block",
  //     webkitBoxSizing: "border-box",
  //     boxSizing: "border-box",
  //     margin: "0 10px 30px",
  //     borderRadius: "20px ",
  //   },
  //   cardImage: {
  //     display: "block",
  //     height: "360px",
  //     objectFit: "cover",
  //     borderRadius: "20px 20px 0 0",
  //   },
  //   heading: {
  //     fontSize: "16px",
  //     fontWeight: "500",
  //     lineHeight: "1",
  //     color: "#282c3f",
  //     marginBottom: "6px",
  //     overflow: "hidden",
  //     textOverflow: "ellipsis",
  //     whiteSpace: "nowrap",
  //   },
  //   subHeading: {
  //     color: "#535766",
  //     fontSize: "14px",
  //     lineHeight: "1",
  //     marginBottom: "0",
  //     marginTop: "0",
  //     overflow: "hidden",
  //     textOverflow: "ellipsis",
  //     whiteSpace: "nowrap",
  //     fontWeight: "400",
  //     display: "block",
  //   },
  //   btnClickHere: {
  //     color: "#ffffff",
  //     fontSize: "14px",
  //     lineHeight: "1",
  //     whiteSpace: "nowrap",
  //   },
  // };
  // console.log(props.item);
  const url = props.item.url;
  // console.log(url);
  return (
    <Col
      xs={6}
      md="auto"
      className="d-flex justify-content-center align-self-center mb-3 "
    >
      <Card
        onClick={(e) => {
          e.preventDefault();
          window.open(url, "_blank");
          // winfdow.location.href = "http://google.com";
        }}
        style={{ cursor: "pointer" }}
        className=" m-0 m-md-3 align-self-center product-base"
      >
        <Card.Img
          variant="top"
          src={props.item.photo}
          className="product-base-img"
        />
        <Card.Body>
          <h1 className="heading">{props.item.name}</h1>
          <p className="sub-heading text-sub-heading ">
            {props.item.description}
          </p>

          {/* <Button
            className="d-grid gap-2 m-3 ms-auto me-auto btnClickHere "
            variant="primary"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              window.open(url, "_blank");
              // winfdow.location.href = "http://google.com";
            }}
          >
            Click Here
          </Button> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardTiles;
