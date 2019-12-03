const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const app = express();

const { 
  PORT,
  MONGODB_CONFIG,
  URL,
  MONGODB_DBNAME
} = require('./utils/constants');

const { router: houseRouter } = require('./routes/houseRouter');

const publicPath = path.resolve(__dirname, "..", "build");
app.use("/", express.static(publicPath));

//these two use are middleware
app.use(express.json());
app.use('/houses', houseRouter);

//connect to database & handle err
mongoose.connect(`${URL}`, MONGODB_CONFIG)
  .then( async() => {
    console.log('Connected to database...');
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  })
  .catch((err) => {
    console.log('Failed to connect to database...')
    throw err
  })
