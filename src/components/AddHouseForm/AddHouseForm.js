import React, { Component } from "react";
import Button from "../Button/Button";

import("./AddHouseForm.css");

class AddHouseForm extends Component {
  render() {
    return(
      <div class="border">
        <h3>New Listing Form</h3>
        <label className="formLabel" htmlFor="address">Address</label>
        <input className="formInput" id="address" type="text" required/>
        <label className="formLabel" htmlFor="city">City</label>
        <input className="formInput" id="city" type="text" required/>
        <label className="formLabel" htmlFor="postalCode">Postal Code</label>
        <input className="formInput" id="postalCode" type="text" required/>
        <label className="formLabel" htmlFor="listingPrice">Listing Price</label>
        <input className="formInput" id="listingPrice" type="text" required/>
        <label className="formLabel" htmlFor="rating">Your rating:</label>
        <input className="formInput"  id="rating" type="text" required/>
        <label className="formLabel" htmlFor="agent">Agent Evaluation:</label>
        <input className="formInput" id="agent" type="text" required/>
        <Button text="Submit" type="submit" />
      </div>
    )
  }
};

export default AddHouseForm;