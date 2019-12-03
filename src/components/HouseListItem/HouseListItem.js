import React, { Component } from 'react';
import Button from "../Button/Button";

class HouseListItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.rating}</p>
        <h3>{this.props.title}</h3>
        <div>
          <p>Location: {this.props.city}</p>
          <p>Price: ${this.props.price}</p>
        </div>
        <p>More details</p>
        <Button text="Delete from list" />
      </li>
    );
  };
};

export default HouseListItem;