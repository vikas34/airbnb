const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data); // Insert Data to Database from data.js
  console.log("Data was Initialized");
};

initDB();
