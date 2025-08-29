const successStatusCode = 200;
const creationStatusCode = 201
const failureStatusCode = 400;
const notFoundStatusCode = 404;

const tasks = [
    {
        id: 1,
        title: "Set up environment",
        description: "Install Node.js, npm, and git",
        completed: true,
        createdAt: new Date(),
        priority: "medium",
    },
    {
        id: 2,
        title: "Create a new project",
        description: "Create a new project using Magic",
        completed: false,
        createdAt: new Date(),
        priority: "medium",
    },
];

module.exports = {
    successStatusCode,
    creationStatusCode,
    failureStatusCode,
    notFoundStatusCode,
    tasks
}