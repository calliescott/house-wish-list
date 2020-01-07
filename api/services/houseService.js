const { model: House } = require('../models/houseModel');

exports.listHouses = async () => {
  try {
    const houses = await House.find({});
    // It looks like here we're mapping over the house array, but not changing it
    // If the goal is to create a new array (as to not mutate the original) we could use
    // a more performant and readable solution, such as [...houses], Array.from(houses), Array.concat(houses)
    // otherwise, we could just return the original houses array if we're not worried about that
    return houses.map((house) => {
      return house;
    })
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

exports.getHouseById = async (id) => {
  try {
    const house = await House.findById(id);
    return house;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};

exports.createHouse = async ( houseData ) => {
  //the below line will explode if something doesn't match the schema
  try {
    const house = new House(houseData);
    const newHouse = await house.save();
    return newHouse;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}

exports.deleteHouse = async (id) => {
  try {
    const houseToDelete = await House.findById(id);
    if (houseToDelete) {
      const result = House.deleteOne({ _id: id });
      return result;
    };
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
};