import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

class Window extends Component {
  render() {
    return (
      <Container
        onClick={() => {
          this.props.clickWindow(this.props.id);
        }}
        className="container border border-success window"
      >
        <h2 class="border border-primary">W</h2>
      </Container>
    );
  }
}

export default Window;
