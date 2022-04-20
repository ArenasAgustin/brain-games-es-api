const { Router } = require("express");
const router = Router();
const scoreRoute = require("./score");

router.use("/score", scoreRoute);

router.use("/", (req, res) =>
  res.status(200).send({
    message: "Example project did not give you access to the api web services",
  })
);

module.exports = router;
