"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    authCtrl = require("../controllers/auth"),
    router = new express.Router();

router.route("/")
    .post(authCtrl.authenticate);

module.exports = router;
