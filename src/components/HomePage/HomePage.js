import React, { Component } from "react";

import AddHouseForm from "../AddHouseForm/AddHouseForm";
import HouseList from "../HouseList/HouseList";

import("./HomePage.css");

class HomePage extends Component {
  constructor() {
    super()

    this.state = {
      houses: [],
      newHouse: ''
    }
  }

  async componentDidMount() {
    const result = await fetch('/houses');
    const data = await result.json();

    const prevState = this.state;
    const newState = { houses: data.results };
    const nextState = Object.assign({}, prevState, newState);
    this.setState(nextState);
  }
  render() {
    return(
      <>
        <h1>Home Page</h1>
        <HouseList houses={this.state.houses} />
        <AddHouseForm />
      </>
    )
  }
}

export default HomePage;