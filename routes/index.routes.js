const router = require("express").Router();
const data = require("../data.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telephone", (req, res, next) => {
  res.json(data);
});

module.exports = router;
