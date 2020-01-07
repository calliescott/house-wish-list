import React, { Component } from "react";

import("./Footer.scss");

class Footer extends Component {
  // Since we're rendering with JS anyways, you could future proof this with something like..
  // const year = new Date().getFullYear()
  // <p>Created by Callie Scott - {year}</p>
  render() {
    return (
      <div className="footerContainer">
        <p>Created by Callie Scott - 2019</p>
      </div>
    )
  }
};

export default Footer;