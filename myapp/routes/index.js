var express = require("express");
var router = express.Router();

router.use("/api", require("./api"));

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("GET - Hello World!");
});

router.post("/", function(req, res, next) {
  const json = {
    method: "post",
    title: "Hello World!"
  };
  res.send(json);
});

router.get("/400", function(req, res, next) {
  res.status(400).send("Bad Request");
});

module.exports = router;
