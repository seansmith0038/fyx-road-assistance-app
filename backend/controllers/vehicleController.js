const catchAsync = require("../utils/catchAsync");
const Vehicle = require("../models/vehicleModel");

exports.getAllVehicles = catchAsync(async (req, res, next) => {
  const input = {
    user: req.body.user,
  };

  const vehicles = await Vehicle.find({ user: input.user });

  res.status(200).json({
    status: "success",
    data: vehicles,
  });
});

exports.addVehicle = catchAsync(async (req, res, next) => {
  const input = {
    user: req.body.user,
    type: req.body.type,
    company: req.body.company,
    model: req.body.model,
    color: req.body.color,
    year: req.body.year,
    licensePlate: req.body.licensePlate,
  };

  const vehicle = await Vehicle.create(input);

  res.status(200).json({
    status: "success",
    data: vehicle,
  });
});

exports.deleteVehicle = catchAsync(async (req, res, next) => {
  await Vehicle.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
