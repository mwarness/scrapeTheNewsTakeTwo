// require fetch.js from controller to run 


var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/", fetchController.scrapeHeadlines);

module.exports = router;