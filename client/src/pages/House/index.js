import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "../../components/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Wrapper from "./Wrapper";
import Roof from "./Roof";
import SecondFloor from "./SecondFloor";
import FirstFloor from "./FirstFloor";
import Footer from "./Footer";
import windows from "./doors.json";
import doors from "./windows.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doors: doors,
      windows: windows,
      id: 0,
      navMessage: "Is Everything Safe??!!",
      alerts: 0,
      footerTitle: "Copyright \u00A9 2019 Paul Raab",
      isHidden: false
    };
    this.clickDoor = this.clickDoor.bind(this);
    this.clickWindow = this.clickWindow.bind(this);
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  clickDoor = (event, id) => {
    console.log("Click on door");
    console.log(id);
    console.log(event);
    console.log(event.currentTarget);
    console.log(this.prop);

    // const door = this.state.doors.filter(door => door.id === id);
  };

  clickWindow = id => {
    console.log("Click on window");
    console.log(id);
    // const window = this.state.windows.filter(window => window.id === id);
  };

  render() {
    return (
      <Container>
        <h1 className="text-center">Protect Your House</h1>
        <Row>
          <Col>
            <Roof />
          </Col>
        </Row>
        <Row>
          <Col>
            <SecondFloor
              clickDoor={this.clickDoor}
              clickWindow={this.clickWindow}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FirstFloor
              clickDoor={this.clickDoor}
              clickWindow={this.clickWindow}
              id={this.state.id}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
