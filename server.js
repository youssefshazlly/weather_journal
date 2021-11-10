const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// Server Port
const port =8080;
const host = "127.0.0.1"
// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for corss origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server 
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

// Callback function to complete GET '/all'
const getAll = (request, response) => response.status(200).send(projectData);
app.get("/all", getAll);

/*app.getAll('all', (request, response) => {
    response.send(projectData).status(200).end();
});
*/

// Post Route
app.post('/postData', (Request , response) => {
    projectData = {
        temp:Request.body.temp,
        date:Request.body.date,
        content:request.body.content 

    };
});