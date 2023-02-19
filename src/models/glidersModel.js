const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const glidersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  addDescription: {
    type: String,
    required: true
  },
  range: {
    type: Number,
    required: true
  },
  gliderImg: {
    type: String,
    required: true
  }
  // user: {
  //   ref: 'users',
  //   type: Schema.Types.ObjectId
  // }
});

module.exports = mongoose.model('Gliders', glidersSchema);
