import React, { useState }  from "react";

import Button from "../Button/Button.jsx";

import("./AddHouseForm.scss");

export default function AddHouseForm(props) {
  const [address, updateAddress] = useState("");
  const [city, updateCity] = useState("");
  const [rating, updateRating] = useState();
  const [listingPrice, updateListingPrice] = useState();
  const [agentValue, updateAgentValue] = useState();
  const [positiveNotes, updatePositiveNotes] = useState("");
  const [negativeNotes, updateNegativeNotes] = useState("");

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
          rating,
          listingPrice,
          agentValue,
          positiveNotes,
          negativeNotes
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
        <input className="formInput" id="address" type="text" required="required" onChange={(e) => {updateAddress(e.target.value);}} value={address}/>
        <label className="formLabel" htmlFor="city">City</label>
        <input className="formInput" id="city" type="text" required="required" value={city} onChange={(e) => {updateCity(e.target.value);}}/>
        <label className="formLabel" htmlFor="listingPrice">Listing Price</label>
        <input className="formInput" id="listingPrice" type="number" required="required" value={listingPrice} onChange={(e) => {updateListingPrice(e.target.value);}}/>
        <label className="formLabel" htmlFor="rating">Your rating:</label>
        <input className="formInput"  id="rating" type="number" required="required" value={rating} onChange={(e) => {updateRating(e.target.value);}}/>
        <label className="formLabel" htmlFor="agent">Agent Evaluation:</label>
        <input className="formInput" id="agent" type="number" required="required" value={agentValue} onChange={(e) => {updateAgentValue(e.target.value);}}/>
        <label className="formLabel" htmlFor="agent">Pros:</label>
        <input className="formInput" id="agent" type="text" required="required" value={positiveNotes} onChange={(e) => {updatePositiveNotes(e.target.value);}}/>
        <label className="formLabel" htmlFor="agent">Cons:</label>
        <input className="formInput" id="agent" type="text" required="required" value={negativeNotes} onChange={(e) => {updateNegativeNotes(e.target.value);}}/>
        <Button text="Submit" onClick={() => {
          createHouse();
          props.history.push("/");
          
        }} />
      </div>
    </div>
  )
};