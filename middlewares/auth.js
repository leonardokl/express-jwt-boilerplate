'use strict'

var jwt = require('jsonwebtoken');
var configAuth = require('../config/auth');

module.exports = function authMiddleware() {
    return {
        checkToken(req, res, next) {
            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            if(token) {
                jwt.verify(token, configAuth.secret, function(err, decoded) {
                    if(err) {
                        return res.json({
                          success: false,
                          message: 'Failed to authenticate token.'
                        })
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                })
            } else {
                return res.status(403).json({
                    success: false,
                    message: 'No token provided'
                });
            }
        }
    }
}();
