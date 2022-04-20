const { Router } = require("express");
const router = Router();
const { getScores, setScores } = require("../controllers/score");

router.get("/", getScores);

router.post("/", setScores);

module.exports = router;
