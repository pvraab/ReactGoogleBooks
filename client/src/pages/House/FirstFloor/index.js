import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Window from "../Window";
import Door from "../Door";

import "./style.css";

function FirstFloor(props) {
  const house = props.house;

  return (
    <Container className="container border border-success first">
      <Row>
        <Col />
        <Col>
          <Window id={"1"} clickWindow={props.clickWindow} />
        </Col>
        <Col />
        <Col>
          <Door id={"1"} clickDoor={props.clickDoor} />
        </Col>
        <Col />
        <Col>
          <Window id={"2"} clickWindow={props.clickWindow} />
        </Col>
      </Row>
    </Container>
  );
}

export default FirstFloor;
