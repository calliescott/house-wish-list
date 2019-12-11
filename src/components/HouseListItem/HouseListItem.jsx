import React, { Component } from 'react';
import Button from "../Button/Button.jsx";

import("./HouseListItem.scss");

class HouseListItem extends Component {

  pushToHouse = (id) => {
    this.props.history.push(`/house/${id}`);
  }; 

  render() {
    return (
      <li className="house-list-item">
        <h3 className="house-list-item-title">{this.props.address}</h3>
        <Button text="See More Details" onClick={() => { this.pushToHouse(this.props.id);} } />
      </li>
    );
  };
};

export default HouseListItem;