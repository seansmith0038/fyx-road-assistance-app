const { Router } = require("express");
const serviceController = require("../controllers/serviceController");

const router = Router();

router
  .route("/")
  .get(serviceController.getAllServices)
  .post(serviceController.addService);

module.exports = router;
