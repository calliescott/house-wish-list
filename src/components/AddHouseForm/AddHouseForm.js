import React, { Component } from "react";
import Button from "../Button/Button";

import("./AddHouseForm.css");

class AddHouseForm extends Component {
  constructor() {
    super();
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

  handleInputChange = (event) => {
    const input = event.target.value;
    this.setState({
      newHouse: input
    });

    const prevState = this.state;
    const newState = { newHouse: input };
    const nextState = Object.assign({}, prevState, newState);
    this.setState(nextState);
  };

  handleButtonSubmit = async (event) => {
    const newHouseData = {
      listingPrice: this.state.listingPrice,
      address: {
        street: this.state.street,
        city: this.state.city,
        postalCode: this.state.postalCode
      },
      agentValue: this.state.agentPrice,
      rating: this.state.rating
    };

    const response = await fetch('/houses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHouseData)
    });

    const newHouse = await response.json();
    const prevHouses = this.state.houses;
    const nextHouses = [...prevHouses, newHouse];
    this.setState({
      houses: nextHouses,
      newHouse: ''
    }); 
  };

  render() {
    return(
      <div className="border">
        <h3>New Listing Form</h3>
        <label className="formLabel" htmlFor="address">Address</label>
        <input className="formInput" id="address" type="text" required onChange={this.handleInputChange} value={this.state.street}/>
        <label className="formLabel" htmlFor="city">City</label>
        <input className="formInput" id="city" type="text" required onChange={this.handleInputChange} value={this.state.city}/>
        <label className="formLabel" htmlFor="postalCode">Postal Code</label>
        <input className="formInput" id="postalCode" type="text" required onChange={this.handleInputChange} value={this.state.PostalCode}/>
        <label className="formLabel" htmlFor="listingPrice">Listing Price</label>
        <input className="formInput" id="listingPrice" type="text" required onChange={this.handleInputChange} value={this.state.listingPrice}/>
        <label className="formLabel" htmlFor="rating">Your rating:</label>
        <input className="formInput"  id="rating" type="text" required onChange={this.handleInputChange} value={this.state.rating}/>
        <label className="formLabel" htmlFor="agent">Agent Evaluation:</label>
        <input className="formInput" id="agent" type="text" required onChange={this.handleInputChange} value={this.state.agentPrice}/>
        <Button text="Submit" type="submit" onClick={this.handleButtonSubmit} />
      </div>
    )
  }
};

export default AddHouseForm;