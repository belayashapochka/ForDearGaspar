require('dotenv').config();
const express = require('express');
const app = express();

const appModule = require('./app.controller');

appModule(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
});