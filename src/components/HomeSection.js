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
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21