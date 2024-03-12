const express = require('express');
const router = express.Router();
const { fetchData } = require('./apiService');

router.get('/', async (req, res) => {
  try {
    const data = await fetchData();
    res.send(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
