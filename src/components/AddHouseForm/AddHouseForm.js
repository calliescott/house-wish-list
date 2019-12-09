import React, { useState }  from "react";
import Button from "../Button/Button";

import("./AddHouseForm.css");

export default function AddHouseForm(props) {
  const [address, updateAddress] = useState("");
  const [city, updateCity] = useState("");
  const [postalCode, updatePostalCode] = useState("");
  const [rating, updateRating] = useState(0);
  const [listingPrice, updateListingPrice] = useState(0);
  const [agentPrice, updateAgentPrice] = useState(0);

  async function createHouse() {
    try {
      const response = await fetch('/api/houses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          address,
          city,
          postalCode,
          rating,
          listingPrice,
          agentPrice
        })
      });
      const resp = await response.json();
      console.log("Resp", resp);
    } catch(err) {
      console.log(err);
    } 
  };

  return(
    <div className="addHouseContainer">
      <div className="border">
        <h3>New Listing Form</h3>
        <label className="formLabel" htmlFor="address">Address</label>
        <input className="formInput" id="address" type="text" required onChange={(e) => {updateAddress(e.target.value);}} value={address}/>
        <label className="formLabel" htmlFor="city">City</label>
        <input className="formInput" id="city" type="text" required value={city} onChange={(e) => {updateCity(e.target.value);}}/>
        <label className="formLabel" htmlFor="postalCode">Postal Code</label>
        <input className="formInput" id="postalCode" type="text" required value={postalCode} onChange={(e) => {updatePostalCode(e.target.value);}}/>
        <label className="formLabel" htmlFor="listingPrice">Listing Price</label>
        <input className="formInput" id="listingPrice" type="text" required value={listingPrice} onChange={(e) => {updateListingPrice(e.target.value);}}/>
        <label className="formLabel" htmlFor="rating">Your rating:</label>
        <input className="formInput"  id="rating" type="text" required value={rating} onChange={(e) => {updateRating(e.target.value);}}/>
        <label className="formLabel" htmlFor="agent">Agent Evaluation:</label>
        <input className="formInput" id="agent" type="text" required value={agentPrice} onChange={(e) => {updateAgentPrice(e.target.value);}}/>
        <Button text="Submit" onClick={() => {
          createHouse();
          props.history.push("/");
          
        }} />
      </div>
    </div>
  )
};