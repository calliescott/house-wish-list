import React from 'react';
import HouseListItem from "../components/HouseListItem/HouseListItem";

export default {
  title: 'HouseListItem',
};

export const basic = () => <HouseListItem rating={1} city="The Beach" price={999999} title="Balmy Beach"/>;


