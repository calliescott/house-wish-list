import React, { Component } from "react";
import { Link } from "react-router-dom";
import("./Header.scss");

class Header extends Component {
  render() {
    return(
      <div className="headerContainer">
        <h2 className="header-title"><Link className="header-title-link" to="/">House Hunting App</Link></h2>
        <nav className="navContainer">
          <ul className="nav-ul">
            <li className="nav-li"><Link className="nav-link" to="/">My List</Link></li>
            <li className="nav-li"><Link className="nav-link" to="/addHouse">Add House</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
};

export default Header;