const Room = require("../models/roomModel");
const Hotel = require("../models/hotelModel");

// add a new room to a hotel
exports.addRoom = async (req, res) => {
  try {
    const { type, price, description, hotelId } = req.body;
    const hotel = await Hotel.findById(hotelId); // to ensure hotel is found
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    const room = new Room({ type, price, description, hotel: hotelId });
    hotel.rooms.push(room.id);
    //increment the total rooms
    hotel.totalRooms++;
    await hotel.save();
    await room.save();
    res.status(201).json({ message: "Room added successfully" });
  } catch (error) {
    res.status(400).json({ message: "Room not added", error: error.message });
  }
};

// get rooms  of a specific hotel
exports.getRoomsByHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const rooms = await Room.find({ hotel: hotelId });
    if (!rooms || rooms.length === 0) {
      return res.status(404).json({ message: "No rooms found for this hotel" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({ message: "Rooms not found", error: error.message });
  }
};
