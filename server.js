// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server - use dynamic port if set else 5000
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and Running on Port: ${port}`);
});

app.post("/data", cityWeather);

function cityWeather(req, res) {
  projectData = {
    temp: req.body.Temprature,
    date: req.body.Date,
    mood: req.body.mood,
  };
  res.send(projectData);
  return projectData;
}

app.get("/all", getData);

function getData(req, res) {
  res.send(projectData);
}
