import React, { useState, useEffect, useRef } from "react";
import("./HousePage.css");

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
  console.log(props);
  return (
    <div className="housePageContainer">
      <h1>Title:{house.title}</h1>
      <p>Price:{house.price}</p>
      <p>Rating:{house.rating}</p>
      <p>Agent Value: {house.agentPrice}</p>
      <p>Address: {house.address}, {house.city}, {house.postalCode}</p>

    </div>
  )
}
