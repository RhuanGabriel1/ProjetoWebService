const express = require("express");
const { helloWorld } = require("./controllers/helloworld");
const router = express.Router();

//will router the controllers.
router.get("/helloworld", helloWorld);
//cache test
module.exports = router;
