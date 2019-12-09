import React, { Component } from 'react';
import Button from "../Button/Button";

class HouseListItem extends Component {

  pushToHouse = (id) => {
    this.props.history.push(`/house/${id}`);
  }; 

  render() {
    console.log("house props", this.props);
    console.log("id", this.props.id);
    return (
      <li>
        <p>{this.props.rating}</p>
        <h3>{this.props.title}</h3>
        <div>
          <p>Location: {this.props.city}</p>
          <p>Price: ${this.props.price}</p>
          <Button text="See More Details" onClick={() => { this.pushToHouse(this.props.id);} } />
        </div>
        <Button text="Delete from list" />
      </li>
    );
  };
};

export default HouseListItem;