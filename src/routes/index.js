const { Router } = require("express");
const router = Router();
const scoreRoute = require("./score");

router.use("/score", scoreRoute);

module.exports = router;
