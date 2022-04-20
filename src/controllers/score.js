const Score = require("../models/score");

const getScores = async (req, res) => {
  try {
    const scores = await Score.find();

    res.status(200).json(scores);
  } catch (err) {
    res.status(400).json({ message: "Cannot get the score", err });
  }
};

const setScores = async (req, res) => {
  try {
    const { name, scorePoints } = req.body;

    const scoreAux = await Score.findOne({ name, scorePoints });

    if (!scoreAux) {
      const newScore = new Score({ name, scorePoints });
      const score = await newScore.save();
    }

    res.status(200).json({ message: "Added Succefully", score });
  } catch (err) {
    res.status(400).json({ message: "Cannot set the score", err });
  }
};

module.exports = {
  getScores,
  setScores,
};
