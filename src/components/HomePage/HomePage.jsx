import React, { Component } from "react";
import HouseList from "../HouseList/HouseList.jsx";

import("./HomePage.scss");

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
        <div>
          <h1>House List</h1>
          <HouseList houses={this.state.houses} history={this.props.history} />
        </div>
      </div>
    )
  }
}

export default HomePage;