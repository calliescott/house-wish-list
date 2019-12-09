import React, { Component } from "react";
import { Link } from "react-router-dom";
import("./Header.css");

class Header extends Component {
  render() {
    return(
      <div className="headerContainer">
        <nav className="navContainer">
          <ul className="nav-ul">
            <li className="nav-li"><Link to="/">My List</Link></li>
            <li className="nav-li"><Link to="/addHouse">Add House</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
};

export default Header;