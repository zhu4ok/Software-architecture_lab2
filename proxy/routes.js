// routes.js
const express = require('express');
const router = express.Router();
const apiService = require('./apiService'); // Припускаючи, що ви також створили apiService

router.get('/', async (req, res) => {
  try {
    const data = await apiService.fetchData(); // fetchData - метод у вашому apiService
    res.send(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
