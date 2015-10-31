'use strict'

var unitCtrl = require("../controllers/unit");
var jwt = require('../middlewares/auth');

module.exports = function unitRoutes(router) {
    router.route('/units')
        .post(jwt.checkToken, unitCtrl.create)
        .get(unitCtrl.index)

    router.route('/units/:id')
        .get(unitCtrl.getById)
        .put(unitCtrl.updateById)
}
