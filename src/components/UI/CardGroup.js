import React from "react";
import CardTiles from "./CardTiles";
import { Row, Container } from "react-bootstrap";
const CardGroupContainer = (props) => {
  console.log(props.items);
  return (
    <>
      <Container className="d-flex  mt-5 mb-5">
        <Row className="">
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
