import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://dionisopunk.files.wordpress.com/2019/01/portaledge-cover.jpg">
        <h1>React Google Books</h1>
        <h2>Reading Is A Sport!!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To React Google Books!</h1>
            <a href="https://developers.google.com/books/">Google Books API</a>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              A React based Google Books Search app. This app uses React
              components, work with helper/util functions, and utilize React
              lifecycle methods to query and display books based on user
              searches. You'll also use Node, Express and MongoDB so that users
              can save books to review or purchase later.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
