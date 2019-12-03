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

//serve static files first
const publicPath = path.resolve(__dirname, "..", "build");
app.use("/", express.static(publicPath));

//these two use are middleware
app.use(express.json());
//then serve custom routes
app.use('/houses', houseRouter);
// app.use('/api/houses', houseRouter);

//then attach everything else to the index.html
//needs to stay at the very bottom because it matches everything
//so you would never get to the other routes. 
app.use("/*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

//probably insert some err handle middleware in this spot

//connect to database & handle err
mongoose.connect(URL, MONGODB_CONFIG)
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
