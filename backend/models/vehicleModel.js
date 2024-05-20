const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const vehicleSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["car", "truck", "bike"],
      default: "car",
    },
    company: {
      type: String,
      required: [true, "Please enter a company name"],
    },
    model: {
      type: String,
      required: [true, "Please enter a model name"],
    },
    color: {
      type: String,
      required: [true, "Please enter a color"],
    },
    year: {
      type: String,
      required: [true, "Please enter a manufactured year"],
    },
    licensePlate: {
      type: String,
      required: [true, "Please enter a license plate number"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please enter a user id"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
