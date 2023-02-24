const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const glidersSchema = new Schema({
  make: {
    type: String,
    required: true
  },
  model: {
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
  gliderImg: {
    type: String,
    required: true
  },
  //Tech data
  list: {
    fullDescription: {
      type: String,
      required: true
    },
    glideRatio: {
      type: String,
      required: true
    },
    motor: {
      type: Boolean,
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    fuselageLength: {
      type: Number,
      required: true
    },
    maxSpeed: {
      type: Number,
      required: true
    },
    emptyMass: {
      type: Number,
      required: true
    },
    maxTakeOfMass: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    oxygen: {
      type: String,
      required: true
    },
    trailer: {
      type: String,
      required: true
    },
    engine: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Gliders', glidersSchema);
