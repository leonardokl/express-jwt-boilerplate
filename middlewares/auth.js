"use strict";

const jwt = require("jsonwebtoken"),
    configAuth = require("../config/auth"),
    debug = require("debug")("authMiddleware");

module.exports = {
    checkToken(req, res, next) {debug(req);
        const token = req.body.token || req.query.token || req.headers["x-access-token"];

        if (token) {
            jwt.verify(token, configAuth.secret, function(err, decoded) {
                if (err) {
                    return res.json({
                        success: false,
                        message: "Failed to authenticate token."
                    })
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            })
        }
        else {
            return res.status(403).json({
                success: false,
                message: "No token provided"
            });
        }
    }
};
