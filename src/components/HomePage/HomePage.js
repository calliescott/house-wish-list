import React, { Component } from "react";

import HouseList from "../HouseList/HouseList";

import("./HomePage.css");

class HomePage extends Component {
  render() {
    return(
      <>
        <h1>Home Page</h1>
        <HouseList />
      </>
    )
  }
}

export default HomePage;