'use strict'

const mongoose = require('mongoose')
const express = require('express')

const app = express()

const {
  API_PORT, 
  MONGODB_CONFIG,
  MONGODB_URL,
  MONGODB_DBNAME  } = require('./utils/constants')

const { router: houseRouter } = require('./routes/houses');

app.use(express.json())
app.use('/houses', houseRouter);


// 7. Start server
mongoose
  .connect(MONGODB_URL, MONGODB_CONFIG)
  .then(async () => {
    console.log(`Connected to database at ${MONGODB_URL}`)
    app.listen(API_PORT, () => {
      console.log(`Server is running on PORT: ${API_PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })
