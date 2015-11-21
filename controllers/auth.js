"use strict"

var User = require("../models/user");

module.exports = {
    authenticate(req, res) {
        const auth = req.body;

        User.getUserByLogin(auth.login)
            .then(user => {
                if (!user) {
                    res.status(200).json({
                            success: false,
                            message: "User not found."
                    });
                }
                else {
                    if(User.comparePasswords(auth.password, user.password)) {
                        let token = User.createToken(user);

                        res.status(200).json({
                            success: true,
                            message: "User authenticated",
                            token: token
                        });
                    }
                    else {
                        res.status(200).json({
                            success: false,
                            message: "Password incorrect."
                        });
                    }
                }
            })
            .catch(err => {
                res.status(500).json({
                    success: false,
                    message: err
                });
            })
    }
};
