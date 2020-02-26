var express = require("express");
var store = require("../../../store");
var router = express.Router();

// /api/exam/
router.get("/", (req, res) => {
  const number = store.read();
  return res.json(number);
});

router.post("/", async (req, res) => {
  const ret = {};
  let number = req.body.number;
  store.write(number);
  number = store.read();
  return res.json(number);
});

module.exports = router;
