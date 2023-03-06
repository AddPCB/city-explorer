const axios = require('axios');

exports.handler = async (event) => {
  const API_KEY = process.env.CITY_KEY;
  const { searchQuery } = JSON.parse(event.body);

  const API = `https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchQuery}&format=json`;
  const response = await axios.get(API);

  return {
    statusCode: 200,
    body: JSON.stringify(response.data[0]),
  };
};