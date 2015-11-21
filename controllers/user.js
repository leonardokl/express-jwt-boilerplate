"use strict"

var User = require("../models/user");

module.exports = {
    index(req, res) {
        User.find()
            .then(users => res.status(200).json(users))
            .catch(err => res.status(500).json(err));
    },

    create(req, res) {
        let data = req.body,
            user = User(data);
        user.save()
            .then(user => res.status(201).json(user))
            .catch(err => res.status(500).json(err));
    },

    getUserByLogin(req, res) {
        let login = req.params.login;

        User.getUserByLogin(login)
            .then(user => {
                if (user != null) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({
                      msg: "User not found!"
                    });
                }
            })
            .catch(err => res.status(500).json(err));
    }
};
