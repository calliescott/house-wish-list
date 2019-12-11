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
      agentValue: agentPrice,
      rating: houseRating,
      positiveNotes,
      negativeNotes
    } = req.body;

    if (!address || address === '') {
      res.status(400).json({ error: 'address name must be provided' })
      return
    }

    if (!city || city === '') {
      res.status(400).json({ error: 'city name must be provided' })
      return
    }
  
    const rating = Number(houseRating)
    if (!rating || rating > 10 || rating < 1) {
      res.status(400).json({ error: 'rating must be between 1 and 10' })
      return
    }

    if (!listingPrice || listingPrice === 0) {
      res.status(400).json({ error: 'price must be provided' })
      return
    }

    if (!agentValue || listingPrice === 0) {
      res.status(400).json({ error: 'rating must be provided' })
      return
    }

    try {
      const house = await houseService.createHouse({
        listingPrice,
        address,
        city,
        agentValue,
        rating,
        positiveNotes,
        negativeNotes
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