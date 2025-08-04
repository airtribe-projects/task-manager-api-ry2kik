## Project Setup

- Accept the Github classroom assignment here: https://classroom.github.com/a/8FaMiv9J

- Review the project requirements and plan your approach.

- Set up the basic project structure and Install Express.js and other necessary NPM packages (npm install express).


## Implement CRUD Operations (In-Memory)

### Task schema:


```json
{
  "id": 2,
  "title": "Create a new project",
  "description": "Create a new project using Magic",
  "completed": false
}
```

- Implement ``` GET /tasks: ``` Retrieve all tasks.

- Implement ``` GET /tasks/:id: ``` Retrieve a specific task by its ID.

- Implement ``` POST /tasks: ``` Create a new task with the required fields (title, description, completed).

- Implement ``` PUT /tasks/:id: ``` Update an existing task by its ID.

- Implement ``` DELETE /tasks/:id: ``` Delete a task by its ID.

- Test all endpoints using Postman or curl to ensure proper functionality.


## Input Validation & Error Handling

- Implement input validation for creating and updating tasks.
    - Ensure the title and description are not empty.
    - Ensure the completed status is a boolean value.

- Implement error handling for invalid requests (e.g., 404 for non-existent task IDs, 400 for invalid input).

- Test the API using Postman or curl to ensure validation and error handling work correctly.


## Optional Extensions (Filtering, Sorting, Priority)

- Implement filtering by completion status for ```GET /tasks``` (e.g., ```GET /tasks?completed=true```).

- Implement sorting by creation date for ```GET /tasks```.

- Add a priority attribute to tasks (low, medium, high).

    - Implement ```GET /tasks/priority/:level:``` Retrieve tasks by priority level.

    - Ensure task creation and updates support the priority field