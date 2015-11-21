"use strict"

const express = require("express"),
    bodyParser = require("body-parser"),
    unitCtrl = require("../controllers/unit"),
    jwt = require("../middlewares/auth"),
    router = new express.Router();

router.use(bodyParser.json());

router.route("/")
    .post(jwt.checkToken, unitCtrl.create)
    .get(unitCtrl.index);

router.route("/:id")
    .get(unitCtrl.getById)
    .put(unitCtrl.updateById);

module.exports = router;
