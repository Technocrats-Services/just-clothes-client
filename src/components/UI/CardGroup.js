import React from "react";
import CardTiles from "./CardTiles";
import { Row, Container } from "react-bootstrap";
const CardGroupContainer = (props) => {
  // console.log(props.items);
  return (
    <>
      <Container className=" mt-3 mb-3 mt-md-5 mb-mb-5">
        <Row className="d-flex justify-content-center align-item-center">
          {props.items.map((item, i) => (
            <CardTiles item={item} key={i} />
            // <div key={i}> {item._id}</div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardGroupContainer;
