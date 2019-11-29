const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = exports.schema = new Schema({
  id: String,
  listingPrice: Number,
  address: {
    street: String,
    city: String,
    postalCode: String
  },
  agentValue: Number,
  rating: Number
});

const House = exports.model = mongoose.model('House', houseSchema);