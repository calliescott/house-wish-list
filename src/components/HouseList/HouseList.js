import React, { Component } from "react";

import Button from "../Button/Button";
import "../HouseListItem/HouseListItem";

import './HouseList.css';
import HouseListItem from "../HouseListItem/HouseListItem";

class HouseList extends Component {

  render() {
    return (
      <ul>
        {this.props.houses ? this.props.houses.map((house, i) => {
          return (
            <HouseListItem key={i} rating={house.rating} title={house.title} city={house.address.city} price={house.listingPrice}/>
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