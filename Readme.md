# Task Manager API

## Overview

This is a simple Task Manager REST API built with Express.js. It allows you to create, read, update, and delete tasks in memory. Each task has an ID, title, description, completion status, creation date, and priority level. The API is designed for learning and demonstration purposes.

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd task-manager-api-ry2kik
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Start the server**
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

4. **Run tests**
   ```sh
   npm test
   ```

## API Endpoints

### 1. Get All Tasks
- **Endpoint:** `GET /tasks`
- **Query Parameters:**
  - `completed` (optional): `true` or `false` to filter by completion status
  - `sort` (optional): `asc` or `desc` to sort by creation date
- **Example:**
  ```sh
  curl http://localhost:3000/tasks
  curl http://localhost:3000/tasks?completed=true
  curl http://localhost:3000/tasks?sort=asc
  ```

### 2. Get Task by ID
- **Endpoint:** `GET /tasks/:taskId`
- **Example:**
  ```sh
  curl http://localhost:3000/tasks/1
  ```

### 3. Get Tasks by Priority
- **Endpoint:** `GET /tasks/priority/:level`
- **Allowed Levels:** `low`, `medium`, `high`
- **Example:**
  ```sh
  curl http://localhost:3000/tasks/priority/medium
  ```

### 4. Create a New Task
- **Endpoint:** `POST /tasks`
- **Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description",
    "completed": false,
    "priority": "medium" // optional, defaults to "medium"
  }
  ```
- **Example:**
  ```sh
  curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title":"New Task","description":"Description","completed":false}'
  ```

### 5. Update a Task
- **Endpoint:** `PUT /tasks/:taskId`
- **Body:** Same as POST
- **Example:**
  ```sh
  curl -X PUT http://localhost:3000/tasks/1 \
    -H "Content-Type: application/json" \
    -d '{"title":"Updated Task","description":"Updated Description","completed":true}'
  ```

### 6. Delete a Task
- **Endpoint:** `DELETE /tasks/:taskId`
- **Example:**
  ```sh
  curl -X DELETE http://localhost:3000/tasks/1
  ```

## Testing the API
- You can use [Postman](https://www.postman.com/) or `curl` to test the endpoints.
- Automated tests are provided in the `test/` folder and can be run with `npm test`.

## Notes
- All data is stored in memory and will reset when the server restarts.
- Input validation and error handling are implemented for all endpoints.

---

Feel free to modify and extend the API for your learning needs!

- Implement sorting by creation date for ```GET /tasks```.

- Add a priority attribute to tasks (low, medium, high).

    - Implement ```GET /tasks/priority/:level:``` Retrieve tasks by priority level.

    - Ensure task creation and updates support the priority field