'use strict'

var userCtrl = require("../controllers/user");
var jwt = require('../middlewares/auth');

module.exports = function userRoutes(router) {
    router.route('/users')
        .get(jwt.checkToken, userCtrl.index)
        .post(userCtrl.create);

    router.route('/users/:login')
        .get(jwt.checkToken, userCtrl.getUserByLogin)
}
