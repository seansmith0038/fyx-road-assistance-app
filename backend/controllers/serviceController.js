const catchAsync = require("../utils/catchAsync");
const Service = require("../models/serviceModel");

exports.getAllServices = catchAsync(async (req, res, next) => {
  const input = {
    user: req.body.user,
  };

  const services = await Service.find({ user: input.user });

  res.status(200).json({
    status: "success",
    data: services,
  });
});

exports.addService = catchAsync(async (req, res, next) => {
  const input = {
    user: req.body.user,
    vehicle: req.body.vehicle,
    type: req.body.type,
    description: req.body.description,
    location: req.body.location,
  };

  const service = await Service.create(input);

  res.status(200).json({
    status: "success",
    data: service,
  });
});
