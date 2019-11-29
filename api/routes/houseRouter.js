const express = require('express');

const houseRouter = express.Router();

const houseService = require('../services/houseService');

houseRouter.route('/')
  .get(async (req, res) => {
    const houses = await houseService.listHouses();
    res.json({
      results: houses
    })
  })
  .post(async (req, res) => {
    const { body } = req;
    const house = await houseService.createHouse(body);

    res.json(house);
  });
   
houseRouter.route('/:houseId')
  .get( async (req, res) => {
    const { params } = req;
    const { houseId } = params;

    const house = await houseService.getHouse(houseId);
    
    if (house) {
    res.json(house);
  } else {
    res.status(404).send();
  }
});

exports.router = houseRouter;