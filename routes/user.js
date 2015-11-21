"use strict";

const express = require("express"),
    userCtrl = require("../controllers/user"),
    jwt = require("../middlewares/auth"),
    router = new express.Router();

router.route("/")
    .get(jwt.checkToken, userCtrl.index)
    .post(userCtrl.create);

router.route("/:login")
    .get(jwt.checkToken, userCtrl.getUserByLogin)

module.exports = router;
