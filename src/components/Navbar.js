import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/> Shannon Nolan
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;