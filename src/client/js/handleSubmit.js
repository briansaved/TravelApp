let formHandler = (city, date) => {
  console.log("Date and Town");
};

let listener = (e) => {
  document.getElementById("generate").addEventListener("click", sendRequest);
};

let unlisten = (e) => {
  document.getElementById("generate").removeEventListener("click", sendRequest);
};

export { listener, unlisten };
