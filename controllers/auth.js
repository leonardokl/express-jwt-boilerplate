'use strict'

var User = require('../models/user');

module.exports = function authCtrlModule() {
    return {
        authenticate(req, res) {
            var auth = req.body;
            User.getUserByLogin(auth.login)
                .then(function(user) {
                    if(!user) {
                        res.status(200).json({
                          success: false,
                          message: "User not found."
                        });
                    } else {
                        if(User.comparePasswords(auth.password, user.password)) {
                            var token = User.createToken(user);
                            res.status(200).json({
                              success: true,
                              message: "User authenticated",
                              token: token
                            });
                        } else {
                            res.status(200).json({
                              success: false,
                              message: "Password incorrect."
                            });
                        }
                    }
                })
                .catch(function(err) {
                    res.status(500).json({
                        success: false,
                        message: err
                    });
                })
        }
    }
}();
