'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UnitSchema = new Schema({
      name: { type: String, required: true },
      location: { type: [Number]}, //[Long, Lat]
      phone: { type: String, default: null}
});

UnitSchema.index({location: '2dsphere'});

UnitSchema.statics.getById = function getByIdStatic(id) {
    return this.findById(id);
}

UnitSchema.statics.updateById = function updateByIdStatic(id, body) {
    return this.findByIdAndUpdate(id, body, { new: true});
}
module.exports = mongoose.model("Unit", UnitSchema);
