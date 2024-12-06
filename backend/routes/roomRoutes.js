const express = require("express");
const { addRoom, getRoomsByHotel } = require("../controllers/roomController"); // Ensure these are correctly imported
const router = express.Router();

// route for adding a new room to a hotel
router.post("/addRoom", addRoom); //tested with postman with a specific hotels id:67520d8d5b5cf768b24308a8: http://localhost:5000/api/rooms/addRoom

// route for getting rooms of a specific hotel
router.get("/:hotelId", getRoomsByHotel); // tested with postman for specific hotels id: http://localhost:5000/api/rooms/67520d8d5b5cf768b24308a8

module.exports = router;
