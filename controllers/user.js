'use strict'

var User = require('../models/user');

module.exports = function userCtrlModule() {
    return {
        index(req, res) {
            User.find()
                .then(function(users) {
                    res.status(200).json(users);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })
        },

        create(req, res) {
            let data = req.body;
            let user = User(data);
            user.save()
                .then(function(user) {
                    res.status(201).json(user);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })
        },

        getUserByLogin(req, res) {
            let login = req.params.login;
            User.getUserByLogin(login)
                .then(function(user) {
                    if (user != null) {
                        res.status(200).json(user);
                    }  else {
                        res.status(404).json({
                          msg: 'User not found!'
                        });
                    }

                })
                .catch(function(err) {
                    res.status(500).json(err);
                })
        },
    }
}();
