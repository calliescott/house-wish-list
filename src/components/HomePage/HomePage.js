import React, { Component } from "react";
import HouseList from "../HouseList/HouseList";

import("./HomePage.css");

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      houses: []
    }
  }

  async componentDidMount() {
    const response = await fetch('/api/houses');
    const resp = await response.json();

    this.setState({
      houses: resp.data
    });
  }

  render() {
    return(
      <div className="homePageContainer">
        <h1>Home Page</h1>
        <HouseList houses={this.state.houses} history={this.props.history} />
      </div>
    )
  }
}

export default HomePage;