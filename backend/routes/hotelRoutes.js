const express = require("express");
const { registerHotel, getHotels } = require("../controllers/hotelController");
const router = express.Router();

// route for registering a new hotel
router.post("/registerHotel", registerHotel); //tested with postman : http://localhost:5000/api/hotels/registerHotel

// route for getting all hotels with room details
router.get("/", getHotels); // tested with postman : http://localhost:5000/api/hotels/
module.exports = router;
