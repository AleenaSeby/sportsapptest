const express = require('express');
const app = express();
const playerRoute = express.Router();

// Player model
let Player = require('../model/Player');

// Add player
playerRoute.route('/add-player').post((req, res, next) => {
  Player.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all player
playerRoute.route('/').get((req, res) => {
  Player.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = playerRoute;
