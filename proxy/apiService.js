// apiService.js
const axios = require('axios');
const config = require('./config');

const fetchData = async () => {
  const response = await axios.get(config.get('api_url'));
  return response.data;
};

module.exports = {
  fetchData,
};
