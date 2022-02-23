const {
  create,
  getTodo,
  getTodoOne,
  updateTodo,
  deleteTodo,
} = require("../controller/controller");
var express = require("express");
var router = express.Router();

router.post("/create", create);
router.get("/getall", getTodo);
router.get("/getone/:id", getTodoOne);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
