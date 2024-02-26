const express = require("express");
const router = express.Router();

//impor controller
const {createTodo} = require("../controllers/createTodo");
const { getTodo, getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deteleTodo } = require("../controllers/deteleTodo");

//define API routers
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deteleTodo/:id", deteleTodo);






module.exports = router;