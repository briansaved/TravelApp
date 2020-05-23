// Require Express to run server and routes bc
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Start up an instance of app bc
const app = express();

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware. bc
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance bc
app.use(cors());

// Initialize the main project folder bc
app.use(express.static(path.join(__dirname, "../client")));

// Setup Server - use dynamic port if set else 8080 bc
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server up and Running on Port: ${port}`);
});

//server to send Webpack produced file as home bc
app.get("/", (req, res) => {
  // res.sendFile(path.resolve("src/client/views/index.html"));
  res.sendFile(path.join(__dirname, "../client/views/index.html"));
});

app.post("/data", (req, res) => {
  projectData.temp = req.body.Temprature;
  projectData.date = req.body.Date;
  projectData.mood = req.body.mood;
  res.send(projectData);
  return projectData;
});

function cityWeather(req, res) {
  projectData.temp = req.body.Temprature;
  projectData.date = req.body.Date;
  projectData.mood = req.body.mood;

  res.send(projectData);
  // return projectData;
}

app.get("/all", getData);

function getData(req, res) {
  console.log(projectData);
  res.send(projectData);
}