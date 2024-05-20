const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
