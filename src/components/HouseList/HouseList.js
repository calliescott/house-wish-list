import React, { Component } from "react";

import Button from "../Button/Button";
import HouseListItem from "../HouseListItem/HouseListItem";

import './HouseList.css';

class HouseList extends Component {
  
  render() {
    const { history, houses } = this.props;
    return (
      <ul>
        {houses ? houses.map((house, i) => {
          return (
            <HouseListItem key={i} rating={house.rating} title={house.title} city={house.city} price={house.listingPrice} history={history} id={house._id}/>
          )
        }) : (
          <li>
            <p>There are currently no houses on your list</p>
            <Button text="Add House" onClick={() => { history.push("/addHouse"); }} />
          </li>
        )} 
      </ul>
    );
  }
};

export default HouseList;