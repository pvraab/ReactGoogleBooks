import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Window from "../Window";

import "./style.css";

function SecondFloor(props) {
  return (
    <Container className="container border border-danger second">
      <Row>
        <Col />
        <Col>
          <Window id={"3"} clickWindow={props.clickWindow} />
        </Col>
        <Col />
        <Col />
        <Col />
        <Col>
          <Window id={"4"} clickWindow={props.clickWindow} />
        </Col>
      </Row>
    </Container>
  );
}

export default SecondFloor;
