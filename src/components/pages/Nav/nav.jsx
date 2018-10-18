import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Clicky Game
          <span class="navbar-text center">Click an image to begin game!</span>
          <span class="badge badge-secondary m-4">0</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
