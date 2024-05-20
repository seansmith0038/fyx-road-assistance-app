const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const vehicleRouter = require("./routes/vehicleRoutes");
const serviceRouter = require("./routes/serviceRoutes");

// App
const app = express();

// Cors
const allowedOrigins = [
  "http://localhost:5173",
  "https://fyx-roadside-assistance.vercel.app/",
];

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

// Routes
app.use("/users/", userRouter);
app.use("/vehicles/", vehicleRouter);
app.use("/services/", serviceRouter);

// Mongoose
mongoose
  .connect(
    "mongodb+srv://maqsudtolipov9:FaZJCZJMsGW95TBg@cluster0.osrizna.mongodb.net/roadside-service?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("🐳 CONNECTED TO DATABASE");
  });

// Server
app.listen(8080, () => console.log("🐳 SERVER IS RUNNING"));
