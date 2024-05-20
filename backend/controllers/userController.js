const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { promisify } = require("util");

const signToken = (id) =>
  jwt.sign({ id }, "sonic-the-bee", {
    expiresIn: "30d",
  });

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user.id);

  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
    withCredentials: true,
  };
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    data: user,
  });
};

exports.signUp = catchAsync(async (req, res) => {
  const input = {
    name: req.body.name,
    password: req.body.password,
  };

  const user = await User.create(input);

  createSendToken(user, 201, req, res);
});

exports.login = catchAsync(async (req, res) => {
  const input = {
    name: req.body.name,
    password: req.body.password,
  };

  const user = await User.findOne({ name: input.name }).select("+password");

  // NO user found
  if (!user) throw new Error(`User ${input.name} not found`);
  // Passwords do not match
  if (user.password !== input.password)
    throw new Error("Passwords do not match");

  createSendToken(user, 200, req, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  const cookieOptions = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: "none",
    secure: true,
    withCredentials: true,
  };
  res.cookie("jwt", "loggedOut", cookieOptions);
  res.status(200).json({ status: "success", message: "See you soon!" });
});

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  if (req.cookies.jwt) {
    const decoded = jwt.verify(req.cookies.jwt, 'secret');
    const user = await User.findById(decoded.id);
    user.password = undefined;

    if (!user) {
      res.status(401).json({
        status: "fail",
        message: "User no longer exists",
      });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } else {
    res.status(401).json({
      status: "error",
      message: "🍪 Please log in first",
    });
  }
});