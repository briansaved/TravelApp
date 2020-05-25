let formHandler = (city, date) => {
  console.log("Date and Town");
};

let unlisten = () => {
  document
    .getElementById("generate")
    .removeEventListener("click", Client.sendRequest);
};

export { unlisten };
