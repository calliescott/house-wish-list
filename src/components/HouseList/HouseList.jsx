import React, { Component } from "react";

import Button from "../Button/Button.jsx";
import HouseListItem from "../HouseListItem/HouseListItem.jsx";

import './HouseList.scss';

class HouseList extends Component {
  
  render() {
    const { history, houses } = this.props;
    return (
      <ul className="house-list-ul">
        {houses.length > 1 ? houses.map((house, i) => {
          return (
            <HouseListItem key={i} rating={house.rating} address={house.address} city={house.city} price={house.listingPrice} history={history} id={house._id}/>
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