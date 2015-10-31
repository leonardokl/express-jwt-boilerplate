'use strict'

var Unit = require('../models/unit');

module.exports = function unitCtrlModule() {
    return {
        index(req, res) {
            Unit.find()
                .then(function(units) {
                    res.status(200).json(units);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })
        },

        create(req, res) {
            let data = req.body;
            let unit = new Unit(data);
            unit.save()
                .then(function(unit) {
                    res.status(201).json(unit);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })
        },

        getById(req, res) {
            let id = req.params.id;
            Unit.getById(id)
                .then(function(unit) {
                    res.status(200).json(unit);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })

        },

        updateById(req, res) {
            let id = req.params.id;
            let body = req.body;
            Unit.updateById(id, body)
                .then(function(unit) {
                    res.status(200).json(unit);
                })
                .catch(function(err) {
                    res.status(500).json(err);
                })

        }
    }
}();
