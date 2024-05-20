const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const serviceSchema = new Schema(
  {
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: [true, "Please provide vehicle id"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user id"],
    },
    type: {
      type: String,
      enum: [
        "roadside-assistance",
        "part-service",
        "washing-service",
        "towing-service",
      ],
      required: [true, "Please select service type"],
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    location: {
      type: [Number],
      validate: {
        validator: function (val) {
          return val.length === 2;
        },
        message: "Please provide location",
      },
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
