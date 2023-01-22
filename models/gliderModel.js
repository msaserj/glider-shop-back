const mongoose = require("mongoose");

const gliderSchema = mongoose.Schema({
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
    range: {
        type: Number,
        required: true
    },
    gliderImg: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Glider", gliderSchema)