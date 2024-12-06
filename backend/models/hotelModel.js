const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    totalRooms: {
      type: Number,
      required: true,
      default: 0,
    },
    rooms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room", // refer to the Room model
      },
    ],
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
