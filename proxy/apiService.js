const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000'); // Використовуйте API_URL з .env
    return response.data;
  } catch (error) {
    console.error("Error making request to API:", error);
    throw error;
  }
};

module.exports = { fetchData };
