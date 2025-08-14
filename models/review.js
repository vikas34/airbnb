const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true, // optional if you want Mongoose to enforce too
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model("Review", reviewSchema);

