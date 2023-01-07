import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

import './HomeSection.css';

class HomeSection extends React.Component {
  render() {
    return (
      <div className="home-section" id="home">
        <Jumbotron>
          <h1>Jonathan Bogdanovicz</h1>
          <h3>
            Creating web experiences for the next generation of consumer-facing companies
          </h3>
          <hr />
          <Nav className="justify-content-center social-container">
            <Nav.Link href="https://github.com/kamilDevguru" target="_blank">
              <svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" height="1em" width="1em" data-reactid="26">
                <pa