const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB "))
  .catch((error) => console.error("MongoDB connection error:", error));

// import routes
const hotelRoutes = require("./routes/hotelRoutes");
const roomRoutes = require("./routes/roomRoutes");

// use the routes
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Hello World in the browser");
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
