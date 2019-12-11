const mongoose = require('mongoose');
const { Schema } = mongoose;

const houseSchema = exports.schema = new Schema({
  listingPrice: Number,
  address: String,
  city: String,
  agentValue: Number,
  rating: Number,
  positiveNotes: String,
  negativeNotes: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

const House = exports.model = mongoose.model('House', houseSchema);