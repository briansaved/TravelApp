/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

const apiKey = `&APPID=4f2ae032089f5dece0abe5982bc51612`;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

//MAKES async fetch request to openweather api
const retrieveData = async (url = "") => {
  const request = await fetch(url);
  try {
    let cityData = await request.json();
    return cityData;
  } catch (error) {
    console.log("opps: There is an error ", error);
  }
};

document.getElementById("generate").addEventListener("click", sendRequest);

//offcial request sent on click of generate button
function sendRequest(e) {
  const newCity = document.getElementById("zip").value;
  let mood = document.getElementById("feelings").value;

  newCity == "" || mood == ""
    ? alert(`Please fill in all fields`)
    : retrieveData(baseUrl + newCity + apiKey)
        .then(function (data) {
          postData("/data", {
            Temprature: data.main.temp,
            Date: newDate,
            mood: mood,
          });
        })
        .then(function () {
          updateUi();
        });
}

let postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();

    return newData;
  } catch (error) {
    console.log(`OOPSIE: ${error}`);
  }
};

const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    console.log(allData);

    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("content").innerHTML = allData.mood;
  } catch (error) {
    console.log(`OOPSIE: ${error}`);
  }
};
