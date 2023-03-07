const axios = require('axios');

exports.handler = async (event) => {
  const API_KEY = process.env.REACT_APP_CITY_KEY;
  const { searchQuery } = event.queryStringParameters;

  const API = `https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
  const response = await axios.get(API);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://explore-new-cities.netlify.app, http://localhost:8888, http://localhost:3000"
    },
    body: JSON.stringify(response.data[0]),
  };
};