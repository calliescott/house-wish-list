const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = exports.schema = new Schema({
  listingPrice: Number,
  address: String,
  city: String,
  postalCode: String,
  agentValue: Number,
  rating: Number
});

const House = exports.model = mongoose.model('House', houseSchema);