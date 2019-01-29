const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  description: String,
  key: { type: String, required: true },
  rating: {type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
