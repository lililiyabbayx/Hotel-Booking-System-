const Hotel = require("../models/hotelModel");
const Room = require("../models/roomModel");

//to register a new hotel

exports.registerHotel = async (req, res) => {
  try {
    const { name, description, location, totalRooms } = req.body;

    // create a new hotel
    const newHotel = new Hotel({
      name,
      description,
      location,
      totalRooms: 0,
      rooms: [], // initialize the rooms with empty array  can add rooms later
    });

    // save the new hotel to the database
    await newHotel.save();
    res
      .status(201)
      .json({ message: "Hotel registered successfully", hotel: newHotel });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "Hotel registration failed", error: error.message });
  }
};

// get all hotels with romm details
exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().populate("rooms");
    res.status(200).json(hotels);
  } catch (error) {
    res.status(400).json({ message: "Hotels not found" });
  }
};
//remarks:need to add hotel approved or not
