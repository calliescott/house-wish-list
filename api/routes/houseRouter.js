const express = require('express');

const houseRouter = express.Router();

const houseService = require('../services/houseService');

houseRouter.get('/', async (req, res, next) => {
  try {
    const houses = await houseService.listHouses();
    res.status(200).json({
      data: houses
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ "error": "Internal server error" });
  }
});

houseRouter.post('/', async (req, res, next) => {
    const { 
      listingPrice,
      address,
      city,
      postalCode,
      agentValue,
      rating
    } = req.body;
    try {
      const house = await houseService.createHouse({
        listingPrice,
        address,
        city,
        postalCode,
        agentValue,
        rating
      });
      res.status(200).json({ data: house })
    } catch(err) {
      console.log(err);
      res.status(500).json({ "error": "Internal server error" });
    }
  });
   
houseRouter.get('/:id', async (req, res, next) => {
  try {
    const house = await houseService.getHouseById(req.params.id);
    res.status(200).json({ data: house });
  } catch(err) {
    console.log(err);
    res.status(500).json({ "error": "Internal server error" });
  }
});

exports.router = houseRouter;