const { Router } = require("express");
const vehicleController = require("../controllers/vehicleController");

const router = Router();

router
  .route("/")
  .get(vehicleController.getAllVehicles)
  .post(vehicleController.addVehicle);

router.route("/:id").delete(vehicleController.deleteVehicle);

module.exports = router;
