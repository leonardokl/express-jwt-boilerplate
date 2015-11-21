"use strict";

require("dotenv").load();
const express = require("express"),
    mongoose = require("mongoose"),
    bluebird = require("bluebird"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    debug = require("debug")("main"),
    database = process.env.DB,
    port = process.env.PORT,
    app = express(),
    routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
mongoose.connect(database);
mongoose.Promise = bluebird.Promise;
mongoose.set("debug", true);

app.get("/", (req, res) => res.status(200).json("api"));
app.use("/api/auth", routes.auth);
app.use("/api/users", routes.user);
app.use("/api/units", routes.unit);

app.listen(port, () => debug(`Connected to: ${port}`));
