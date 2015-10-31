'use strict'

var authCtrl = require("../controllers/auth");

module.exports = function authRoutes(router) {
    router.route('/auth')
        .post(authCtrl.authenticate);
}
