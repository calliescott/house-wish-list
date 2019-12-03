import React, { Component } from "react";

import Button from "../Button/Button";
import "../HouseListItem/HouseListItem";

import './HouseList.css';
import HouseListItem from "../HouseListItem/HouseListItem";

class HouseList extends Component {
  constructor() {
    super();
    this.state = {
      houses: [{
        title: "House 1",
        rating: 4,
        city: "Toronto",
        price: 999000
      }, {
        title: "House 2",
        rating: 8,
        city: "Toronto",
        price: 999000
      }]
    }
  }

  render() {
    return (
      <ul>
        {this.state.houses ? this.state.houses.map((house) => {
          const { rating, title, city, price } = house;
          return (
            <HouseListItem rating={rating} title={title}city={city} price={price}/>
          )
        }) : (
          <div>
            <p>There are currently no houses on your list</p>
            <Button text="Add House" />
          </div>
        )} 
      </ul>
    );
  }
};

export default HouseList;