const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

const { 
  API_PORT,
  MONGODB_CONFIG,
  MONGODB_URI,
  MONGODB_DBNAME
} = require('./utils/constants');

const { router: houseRouter } = require('./routes/houseRouter');

const publicPath = path.resolve(__dirname, "..", "build");
app.use("/", express.static(publicPath));

//these two use are middleware
app.use(express.json());
app.use('/houses', houseRouter);

//connect to database & handle err
mongoose.connect(`${MONGODB_URI}/${MONGODB_DBNAME}`, MONGODB_CONFIG)
  .then( async() => {
    console.log('Connected to database...');
    app.listen(API_PORT, () => {
      console.log(`Server running on port: ${API_PORT}`);
    })
  })
  .catch((err) => {
    console.log('Failed to connect to database...')
    throw err
  })
