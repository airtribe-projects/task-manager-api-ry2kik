require('dotenv').config();
const express = require("express");
const app = express();
const taskRouter = require('./routes/tasks.route');

const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/tasks', taskRouter)


app.listen(port, (err) => {
    if (err) {
        console.log('Error in connecting with the server: ', err);
    }
    console.log(`We are listening at port number ${ port }...`);
});

module.exports = app;