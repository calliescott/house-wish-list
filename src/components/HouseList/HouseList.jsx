import React, { Component } from "react";

import Button from "../Button/Button.jsx";
import HouseListItem from "../HouseListItem/HouseListItem.jsx";

import './HouseList.scss';

class HouseList extends Component {
  
  render() {
    const { history, houses } = this.props;
    return (
      <ul className="house-list-ul">
        {houses.length > 0 ? houses.map((house, i) => {
          // Since we're passing so many props, almost all of which are inside of `house`
          // It might be more readable to simply pass the entire house, ex. house={house}
          // And destructure the params on the other side
          return (
            <HouseListItem key={i} rating={house.rating} address={house.address} city={house.city} price={house.listingPrice} history={history} id={house._id}/>
          )
        }) : (
          <li>
            <p>There are currently no houses on your list</p>
            {/* We probably want to use the Link component here, rather than a button with history manipulation logic,
                both for semantics and for readability
             */}
            <Button text="Add House" onClick={() => { history.push("/addHouse"); }} />
          </li>
        )} 
      </ul>
    );
  }
};

export default HouseList;