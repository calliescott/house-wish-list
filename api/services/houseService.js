const { model: House } = require('../models/houseModel');

exports.listHouses = async () => {
  try {
    const houses = await House.find({});
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