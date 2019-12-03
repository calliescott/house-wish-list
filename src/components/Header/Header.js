import React, { Component } from "react";
import { Link } from "react-router-dom";
import("./Header.css");

class Header extends Component {
  render() {
    return(
      <div>
        <nav>
          <ul>
            <li><Link to="/">My List</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
};

export default Header;