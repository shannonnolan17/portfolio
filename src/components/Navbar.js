import React, { Component } from 'react';
import '../Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-section">
        <nav class="">
          <a className="logo-position" href="#">
            <img src={require("./Shannon's logo 3.png")} width="80" height="65" alt=""/>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;