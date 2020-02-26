var express = require("express");
var router = express.Router();

var examRouter = require("./exam");

// /api/exam
router.use("/exam", examRouter);

module.exports = router;
