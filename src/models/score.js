const mongoose = require("mongoose");
const { Schema } = mongoose;

const ScoreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scorePoints: {
    type: Number,
    required: true,
  },
});

const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;
