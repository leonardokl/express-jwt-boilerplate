'use strict'

module.exports = function routesModule(router) {
    require('./auth')(router);
    require('./user')(router);
    require('./unit')(router);
}
