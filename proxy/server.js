// server.js
require('dotenv').config();
const express = require('express');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use('/', routes);

const port = config.get('port');
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
