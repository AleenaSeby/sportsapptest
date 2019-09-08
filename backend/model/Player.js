const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Player = new Schema({
  player_name: {
    type: String
  },
  age: {
    type: Number
  },
  total_runs: {
    type: Number
  },
  hundreds: {
    type: Number
  },
  wickets: {
    type: Number
  },
  strike: {
    type: String
  },
 
}, {
  collection: 'player'
})

module.exports = mongoose.model('Player', Player)