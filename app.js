const dotenv = require("dotenv");
dotenv.config();
const Listing = require("./models/listing.js");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 8000;

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

app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   const sampleListing = new Listing({
//     title: "my Home",
//     description: "Flat",
//     price: "500000",
//     location: "Noida",
//     country: "India",
//   });

//   await sampleListing.save();
//   res.send("successfully testing")
//   console.log("Data was successfully saved");
// });

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
