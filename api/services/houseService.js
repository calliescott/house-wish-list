const uuid = require('uuid/v4');
const { model: House } = require('../models/houseModel');

exports.listHouses = async () => {
  try {
    const houses = await House.find({});
    return houses.map((house) => {
      return house;
    })
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getHouse = async (houseId) => {
  try {
    const house = await House.findById(houseId);
    return house;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.createHouse = async ( data = {} ) => {
  //the below line will explode if something doesn't match the schema
  try {
    const house = new House(data);
    const doc = await house.save();
    return doc;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

exports.deleteHouse = async (houseId) => {
  try {
    const houseToDelete = await exports.getHouse(houseId);
    if (houseToDelete) {
      const houses = await House.find({});
      const result = houses.deleteOne({ _id: houseId });
      return result;
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};