const express = require("express");
const router = express.Router();
const taskControllers = require('../controller/tasks.controller');

// Retrieve tasks
router.get("/", taskControllers.retriveTasks);

// Retrieve task by an ID
router.get("/:taskId", taskControllers.retriveTasksByID);

// Retrieve task by a priority level
router.get("/priority/:level", taskControllers.retriveTasksByPriority);

// Create a task
router.post("/", taskControllers.postTasks);

// update an existing task by its id
router.put("/:taskId", taskControllers.updateTasks);

// delete a task by its id
router.delete("/:taskId", taskControllers.deleteTaskByID);


module.exports = router;