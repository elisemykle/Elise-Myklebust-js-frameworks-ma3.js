import React from 'react';
import '../css/App.css';
import Heading from "./Heading";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import HomeContent from "./HomeContent";
import NewsList from "./NewsList";
import LoginForm from "./LoginForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

export default function App() {
  return (
      <Router className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
              <NavLink to="/" exact>
                  <Navbar.Brand>Elise Rocks!</Navbar.Brand>
              </NavLink>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                      <NavLink to="/" exact className="nav-link">Home</NavLink>
                      <NavLink to="/news" className="nav-link">News</NavLink>
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Container>
              <Switch>
                  <Route path="/" exact component={HomeContent}>
                      <Heading content="Homepage"/>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architeris cum dignissimos doloribus eaque eligendi impedit magnam, mollitia possimus quas, quidem recusandae rem sapiente sequi vel?
                      </p>
                  </Route>
                  <Route path="/news" component={NewsList}/>
                  <Route path="/login" component={LoginForm}/>
              </Switch>
          </Container>
      </Router>
  );
}
