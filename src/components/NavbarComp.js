import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import LinkTo from "./LinkTo";

export default class NavbarComp extends Component {
  render() {
    return (
      // <Router>
        <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        // <div>
        // <Switch>
        //   <Route path="/home">
        //     <Home />
        //   </Route>
        //   {/* <Route path="/subm">
        //     <Subm />
        //   </Route> */}
        //   <Route path="/linkto">
        //     <LinkTo />
        //   </Route>
        //   {/* <Route path="/discussion">
        //     <Discussion />
        //   </Route> */}
        // </Switch>
        // </div>
      // </Router>
    );
  }
}
