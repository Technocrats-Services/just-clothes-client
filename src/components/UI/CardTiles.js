import React from "react";
import { Col, Row, Button, Card, Container } from "react-bootstrap";
import styleExtra from "./CardTiles.module.css";
const CardTiles = (props) => {
  const styles = {
    card: {
      width: "320px",
      textAlign: "left",
      position: "relative",
      verticalAlign: "top",
      overflow: "hidden",
      display: "inline-block",
      webkitBoxSizing: "border-box",
      boxSizing: "border-box",
      margin: "0 10px 30px",
      borderRadius: "20px ",
    },
    cardImage: {
      display: "block",
      height: "360px",
      objectFit: "cover",
      borderRadius: "20px 20px 0 0",
    },
    heading: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1",
      color: "#282c3f",
      marginBottom: "6px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    subHeading: {
      color: "#535766",
      fontSize: "14px",
      lineHeight: "1",
      marginBottom: "0",
      marginTop: "0",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontWeight: "400",
      display: "block",
    },
    btnClickHere: {
      color: "#ffffff",
      fontSize: "14px",
      lineHeight: "1",
      whiteSpace: "nowrap",
    },
  };
  console.log(props.item);
  const url = props.item.url;
  console.log(url);
  return (
    <Col className="d-flex justify-content-center align-self-center">
      <Card style={styles.card} className="m-3 align-self-center">
        <Card.Img
          variant="top"
          src={props.item.photo}
          style={styles.cardImage}
        />
        <Card.Body>
          <Card.Title style={styles.heading}>{props.item.name}</Card.Title>
          <p style={styles.subHeading}>{props.item.description}</p>

          <Button
            style={styles.btnClickHere}
            className="d-grid gap-2 m-3 ms-auto me-auto"
            variant="primary"
            size="lg"
            onClick={(e) => {
              e.preventDefault();
              window.open(url, "_blank");
              // window.location.href = "http://google.com";
            }}
          >
            Click Here
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardTiles;
