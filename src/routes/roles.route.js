const { Router } = require("express");
const router = Router();
const { rolController } = require("../controllers");

router.get("/", rolController.getRoles);

module.exports = router;
