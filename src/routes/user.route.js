const { Router } = require("express");
const router = Router();
const { userController } = require("../controllers");
const { genericMiddleware } = require("../middlewares");
const { User } = require("../db/models");
const UserSchema = require("../schemas/user.schema");

router.get("/", userController.getUsers);

router.get(
  "/:id",
  genericMiddleware.validaId,
  genericMiddleware.existsModelById(User),
  userController.getUserById
);

router.post(
  "/",
  genericMiddleware.schemaValidator(UserSchema),
  userController.createUser
);

router.delete(
  "/:id",
  genericMiddleware.validaId,
  genericMiddleware.existsModelById(User),
  userController.deleteById
);

module.exports = router;
