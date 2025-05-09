const { Router } = require("express");
const router = Router();
const { userController } = require("../controllers");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.delete("/:id", userController.deleteById);

module.exports = router;
