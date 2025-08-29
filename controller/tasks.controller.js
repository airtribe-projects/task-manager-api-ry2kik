const { tasks, failureStatusCode, creationStatusCode, successStatusCode, notFoundStatusCode } = require('../utils/Constants');
const validateTaskInput = require('../utils/validation');

// TODO Retrieve tasks
const retriveTasks = (req, res) => {
    const { completed, sort } = req.query;
    // let filteredTasks = [...tasks];
    let filteredTasks = tasks;

    if (completed !== undefined) {
        if (completed !== "true" && completed !== "false") {
            return res.status(failureStatusCode).json({ error: "Completed must be true or false" });
        }
        filteredTasks = filteredTasks.filter(
            (task) => task.completed === (completed === "true")
        );
    }

    if (sort === "asc" || sort === "desc") {
        filteredTasks.sort((a, b) => {
            if (sort === "asc") return new Date(a.createdAt) - new Date(b.createdAt);
            else return new Date(b.createdAt) - new Date(a.createdAt);
        });
    }

    res.status(successStatusCode).json(filteredTasks);
}

// TODO Retrieve task by an ID
const retriveTasksByID = (req, res) => {
    const taskID = parseInt(req.params.taskId);
    const task = tasks.find((task) => task.id === taskID);
    if (!task) {
        return res.status(notFoundStatusCode).json({ error: "Task not found" });
    }
    res.status(successStatusCode).json(task);
}


// TODO Retrieve task by a priority level
const retriveTasksByPriority = (req, res) => {
    const { level } = req.params;
    const allowedPriorities = ["low", "medium", "high"];
    if (!allowedPriorities.includes(level)) {
        return res.status(failureStatusCode).json({ error: "Invalid priority level" });
    }

    const filtered = tasks.filter((task) => task.priority === level.toLowerCase());
    res.status(successStatusCode).json(filtered);
}

// TODO Create a task
const postTasks = (req, res) => {
    const { title, description, completed, priority } = req.body;
    const validationError = validateTaskInput(
        title,
        description,
        completed,
        priority
    );
    if (validationError) {
        return res.status(failureStatusCode).json({ error: validationError });
    }
    const newID = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
        id: newID,
        title,
        description,
        completed,
        createdAt: new Date(),
        priority: priority || "medium",
    };
    tasks.push(newTask);
    res.status(creationStatusCode).json(newTask);
}

// TODO update an existing task by its id
const updateTasks = (req, res) => {
    const taskID = parseInt(req.params.taskId);
    if (!Number.isInteger(taskID) || taskID <= 0) {
        return res.status(failureStatusCode).json({ error: "Task ID must be a valid number" });
    }

    const { title, description, completed, priority } = req.body;
    const validationError = validateTaskInput(
        title,
        description,
        completed,
        priority
    );
    if (validationError) {
        return res.status(failureStatusCode).json({ error: validationError });
    }

    const taskIndex = tasks.findIndex((task) => task.id === taskID);
    if (taskIndex === -1) {
        return res.status(notFoundStatusCode).json({ error: "Task not found" });
    }

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title,
        description,
        completed,
        priority: priority || "medium",
    };
    res.status(successStatusCode).json(tasks[taskIndex]);
}

// TODO delete a task by its id
const deleteTaskByID = (req, res) => {
    const taskID = parseInt(req.params.taskId);
    if (!Number.isInteger(taskID) || taskID <= 0) {
        return res.status(failureStatusCode).json({ error: "Task ID must be a valid number" });
    }

    const taskIndex = tasks.findIndex((task) => task.id === taskID);
    if (taskIndex === -1) {
        return res.status(notFoundStatusCode).json({ error: "Task not found" });
    }
    tasks.splice(taskIndex, 1);
    res.status(successStatusCode).json({
        message: `Task with id ${taskID} deleted successfully`,
    });
}

module.exports = {
    retriveTasks,
    retriveTasksByID,
    retriveTasksByPriority,
    postTasks,
    updateTasks,
    deleteTaskByID
}