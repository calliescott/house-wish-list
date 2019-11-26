import React, { Component } from 'react';

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
      </li>
    );
  };
};

export default HouseListItem;