const express = require("express");
const { logReqRes } = require("../middleware/index");
const {
  handleGetAllUser,
  handleGetUserById,
  handleUserUpdate,
  handleUserDelete,
  handleCreateNewUser,
} = require("../controllers/user");

const router = express.Router();

router.use(logReqRes);

router.get("/", handleGetAllUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUserUpdate)
  .delete(handleUserDelete);

router.post("/", handleCreateNewUser);

module.exports = router;
