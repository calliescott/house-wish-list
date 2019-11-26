const uuid = require('uuid/v4');

const { model: House } =require('../models/houseModel');

const HOUSES = [
  { 
    id: uuid(),
    listingPrice: 999000,
    address: {
      street: "1 Balmy Avenue",
      city: "Toronto",
      postalCode: "M5V2T8"
    },
    agentValue: 1200000,
    rating: 8
  },
  {
    id: uuid(),
    listingPrice: 1800000,
    address: {
      street: "29 Treadway Blvd",
      city: "East York",
      postalCode: "M4E2H8"
    },
    agentValue: 1600000,
    rating: 4
  }
];

exports.listHouses = async () => HOUSES.map((house) => {
  const result = Object.assign({}, house);
  return result;
});

// exports.listHouses = async () => {
//   try {
//     const houses = await houses.find({});
//     return recipes.map((house) => {
//       return house;
//     })

//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

exports.getHouse = async (houseId) => {
  try {
    const house = await house.findById(houseId);
    return house;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.createHouse = async (data = {}) => {
  try {
    const house = new House(data);
    const doc = await house.save();
    return doc;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

exports.deleteHouse = async (houseId) => {};
