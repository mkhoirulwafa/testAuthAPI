const userController = require("../controllers/userController");
const router = require("express").Router();
const { authentication } = require("../middlewares/authentication");
const { authorization } = require("../middlewares/authorization");

router
  .get("/", userController.getAllUsers)
  .get("/admin", authentication, authorization, userController.getAllUsers)
  .post("/", authentication, authorization, userController.postUser)
  .patch("/:id", authentication, authorization, userController.updateUser)
  .delete("/:id", authentication, authorization, userController.deleteUser)

module.exports = router;
