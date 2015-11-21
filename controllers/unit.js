"use strict"

var Unit = require("../models/unit");

module.exports = {
    index(req, res) {
        Unit.find()
            .then(units => res.status(200).json(units))
            .catch(err => res.status(500).json(err));
    },

    create(req, res) {
        let data = req.body,
            unit = new Unit(data);

        unit.save()
            .then(unit =>  res.status(201).json(unit))
            .catch(err => res.status(500).json(err));
    },

    getById(req, res) {
        let id = req.params.id;

        Unit.getById(id)
            .then(unit => res.status(200).json(unit))
            .catch(err => res.status(500).json(err));
    },

    updateById(req, res) {
        let id = req.params.id,
            body = req.body;

        Unit.updateById(id, body)
            .then(unit => res.status(200).json(unit))
            .catch(err => res.status(500).json(err));
    }
};
