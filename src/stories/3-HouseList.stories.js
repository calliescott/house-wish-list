import React from "react";
import HouseList from "../components/HouseList/HouseList";
import HouseListItem from "../components/HouseListItem/HouseListItem";

export default {
  title: 'HouseList',
};

export const basic = () => <HouseList>
    <HouseListItem rating={1} city="City" price={999999} title="Houst List Item 1"/>
    <HouseListItem rating={2} city="City" price={999999} title="Houst List Item 2"/>
    <HouseListItem rating={3} city="City" price={999999} title="Houst List Item 3"/>
  </HouseList>;