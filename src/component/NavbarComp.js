import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacts from "./Contacts";
import Home from "./Home";
import About from "./About"


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand target="_blank" href="https://github.com/Verson-tech">GitHub🚀</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        {/* <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>

        <Nav.Link as={Link} to={"/about"}>About</Nav.Link>

        <Nav.Link as={Link} to={"/contacts"}>Contact</Nav.Link> */}

        <NavDropdown title="Full-Stack Banking App" id="basic-nav-dropdown">
          <NavDropdown.Item target="_blank" href="https://www.evernote.com/shard/s739/client/snv?noteGuid=a97c2f6f-1811-9e63-5eed-0b392430a63a&noteKey=5a8756e3a0c43f28f1a0ae40a36c5319&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs739%2Fsh%2Fa97c2f6f-1811-9e63-5eed-0b392430a63a%2F5a8756e3a0c43f28f1a0ae40a36c5319&title=1%2529%2BCapstone%2BOption%2B1%253A%2BFull-Stack%2BBanking%2BApplication%2BIntroduction%2BAnd%2BInstructions%2B%25285%253A00%2529">Introduction</NavDropdown.Item>
          <NavDropdown.Item target="_blank" href="https://www.evernote.com/shard/s739/client/snv?noteGuid=f954ece5-e0c7-3804-00d8-c7789f6e98b9&noteKey=ae699e0753ebb19a4a2d78004c13100b&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs739%2Fsh%2Ff954ece5-e0c7-3804-00d8-c7789f6e98b9%2Fae699e0753ebb19a4a2d78004c13100b&title=2%2529%2BFull-Stack%2BBanking%2BApplication%2BPresentation%2BSubmission">Presentation Submition</NavDropdown.Item>
          <NavDropdown.Item target="_blank" href="https://www.evernote.com/shard/s739/client/snv?noteGuid=08e8f22b-dd7e-acb4-6d50-1305f153f662&noteKey=15ff4f9ee2dac6c2e074177eabf02aee&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs739%2Fsh%2F08e8f22b-dd7e-acb4-6d50-1305f153f662%2F15ff4f9ee2dac6c2e074177eabf02aee&title=3%2529%2BFull-Stack%2BBanking%2BApplication%2BLink%2BSubmission">Link Submission</NavDropdown.Item>
          <NavDropdown.Item target="_blank" href="https://www.evernote.com/shard/s739/client/snv?noteGuid=0cb2fea3-3e7f-8ee2-1e11-f074ee45f4a4&noteKey=460f883f1f7b65be39e8e88fb008d45d&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs739%2Fsh%2F0cb2fea3-3e7f-8ee2-1e11-f074ee45f4a4%2F460f883f1f7b65be39e8e88fb008d45d&title=Full-Stack%2BBanking%2BApplication%2BPresentation%2BSubmission%2Brubricn">Submission rubric</NavDropdown.Item>
                    <NavDropdown.Divider />
          <NavDropdown.Item target="_blank" href="https://www.evernote.com/shard/s739/client/snv?noteGuid=31a77fb3-ccdc-4a9e-25f7-5c1c450aa3ad&noteKey=ca7edf8f051f6d2c438fbfa5b19241ec&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs739%2Fsh%2F31a77fb3-ccdc-4a9e-25f7-5c1c450aa3ad%2Fca7edf8f051f6d2c438fbfa5b19241ec&title=Things%2BI%2Balready%2Bworked%2Bon">Things I already worked on</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
         <div>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
         
        </Switch>
         </div>
       </Router>
    );
  }
}
