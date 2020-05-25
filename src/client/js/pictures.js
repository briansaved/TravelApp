let getImage = async (city, country) => {
  const baseUrl = "https://pixabay.com/api/?key=";
  const api_Key = "16717105-735b294afc55d03fb38d00a9d&q=";
  const options = "&image_type=photo&category=places&orientation=horizontal";
  /*https://pixabay.com/api/?key=16717105-735b294afc55d03fb38d00a9d
  &q=yellow+flowers&image_type=photo
  */
  console.log("country argument is ", country);
  console.log(baseUrl + api_Key + city + options);
  let image = await fetch(baseUrl + api_Key + city + options);
  let imageFallback;
  console.log("image before try block is ", image);
  try {
    let picData = await image.json();
    picData.hits.length === 0
      ? ((imageFallback = await fetch(baseUrl + api_Key + country + options)),
        (picData = await imageFallback.json()))
      : (imageFallback = "");
    console.log("the raw pic data is ", picData);
    console.log(picData.hits[0].webformatURL);
    return picData.hits[0].webformatURL;
  } catch (err) {
    console.log("OOPSIE :", err);
  }
};

export { getImage };
