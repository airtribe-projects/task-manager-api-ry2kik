const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = [
    {
        "id": 2,
        "title": "Create a new project",
        "description": "Create a new project using Magic",
        "completed": false
    }
];

function inputValidation(title, description, completed) {
    if (!title || title.trim() == '' || typeof title !== 'string')
        return "Title is required and must not be empty";
    
    if (!description || description.trim() == '' || typeof description !== 'string')
        return "Description is required and must not be empty";
    
    if (typeof completed !== 'boolean')
        return "Completed must be a boolean value";


}

// Retrive all the Tasks
app.get('/api/v1/tasks/', (req, res) => {
    res.status(200).json(tasks)
});

// Retrive tasks by ID
app.get('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskData = tasks.find(task => task.id == id);
    if (!taskData)
        return res.status(404).json({ error: 'Task not found' });

    return res.status(200).json(taskData);
});


// Creating new Task
app.post('/api/v1/tasks/', (req, res) => {
    const { title, description, completed } = req.body;
    const validateError = inputValidation(title, description, completed);

    if (validateError)
        return res.status(400).json({ error: validateError });

    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
        id: newId,
        title,
        description, completed
    };
    tasks.push(newTask);
    res.status(200).json(tasks);
});

// Updating the tasks by ID
app.put('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params;
    if (id <= 0 || !Number.parseInt(id))
        return res.status(400).json({ error: 'Invalid ID' });

    const { title, description, completed } = req.body;
    const validateError = inputValidation(title, description, completed);

    if (validateError)
        return res.status(400).json({ error: validateError })

    const taskIndex = tasks.findIndex(t => t.id == id);
    if (taskIndex < -1)
        return res.status(400).json({ error: 'Task not found' });

    tasks[taskIndex] = {
        ...tasks[taskIndex],
        title,
        description,
        completed
    };

    res.status(200).json(tasks[taskIndex]);
 });


// Deleting the task by ID
app.delete('/api/v1/tasks/:id', (req, res) => {
    const { id } = req.params;
    if (id <= 0 || !Number.parseInt(id))
        return res.status(400).json({ error: 'Not a valid ID' });

    const task = tasks.find(t => t.id == id);
    if (!task)
        return res.status(404).json({ error: 'Invalid Task' });

    const filterTask = tasks.filter(t => t.id != id)
    res.status(200).json(filterTask);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}...`);
});



module.exports = app;