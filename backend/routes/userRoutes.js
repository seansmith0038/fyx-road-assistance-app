const { Router } = require("express");
const userController = require("../controllers/userController");

const router = Router();

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/isLoggedIn", userController.isLoggedIn);
router.get("/logout", userController.logout);

module.exports = router;
