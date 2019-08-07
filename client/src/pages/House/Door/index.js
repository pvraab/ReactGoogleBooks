import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

class Door extends Component {
  render() {
    return (
      <Container onClick={(event) => {this.props.clickDoor(event, this.props.id)}} className="container border border-success door">
        <h2 class="border border-primary">D</h2>
      </Container>
    );
  }
}

export default Door;
