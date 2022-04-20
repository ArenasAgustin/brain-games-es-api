const Score = require("../models/score");

const getScores = async (req, res) => {
  try {
    const scores = await Score.find();

    return res.status(200).json(scores);
  } catch (err) {
    return res.status(400).json({ message: "Cannot get the score", err });
  }
};

const setScores = async (req, res) => {
  const { name, scorePoints } = req.body;

  let score = {};
  const scoreAux = await Score.findOne({ name, scorePoints });

  if (scoreAux)
    return res.status(200).json({ message: "Score already exists" });

  try {
    score = new Score({
      name,
      scorePoints,
    });

    score.save();

    return res.status(200).json({ message: "Added Succefully", ...score });
  } catch (err) {
    return res.status(400).json({ message: "Cannot set the score", err });
  }
};

module.exports = {
  getScores,
  setScores,
};
