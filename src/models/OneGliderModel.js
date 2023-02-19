const mongoose = require('mongoose');

const glidersSchema = mongoose.Schema({
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
    required: true,
    list: [
      {
        add1: {
          type: String,
          required: true
        },
        add2: {
          type: String,
          required: true
        }
      }
    ]
  },
  range: {
    type: Number,
    required: true
  },
  gliderImg: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('OneGlider', glidersSchema);
