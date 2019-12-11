import React, { useState, useEffect, useRef } from "react";

import Button from "../Button/Button.jsx";

import("./HousePage.scss");

export default function HousePage(props) {
  const [ house, updateHouse ] = useState({});
  const hasRetrievedHouse = useRef(false);

  useEffect(() => {
    async function getHouseListingById() {
      try { 
        const response = await fetch(`/api/houses/${props.match.params.id}`);
        const resp = await response.json();
        updateHouse(resp.data);
        hasRetrievedHouse.current = true;
      } catch(err) {
        console.log(err);
      }
    };

    getHouseListingById();

  }, [ props.match.params.id]);

  async function deleteHouse() {
    try {
      const response = await fetch('/api/houses', {
        method: 'DELETE'
      });
      const resp = await response.json();
      console.log("Resp", resp);
    } catch(err) {
      console.log(err);
    } 
  };

  return (
    <div className="housePageContainer">
    <div className="houseContainer">
      <h1>Location: {house.address}</h1>
      <p>Price: {house.listingPrice}</p>
      <p>Rating: {house.rating}</p>
      <p>{`Agent Value: ${house.agentValue}`}</p>
      <p>city: {house.city}</p>
      <p>Pros: {house.positiveNotes}</p>
      <p>Cons: {house.positiveNotes}</p>
      <div className="buttonContainer">
        <Button text={"Delete from list"} onClick={() => {
          deleteHouse();
          props.history.push("/");
        }}/>
        <Button text={"Back to List"} onClick={() => {
          props.history.push("/");
        }}/>
      </div>
    </div>
    <div className="imageContainer">
    </div>
      
    </div>
  )
}
