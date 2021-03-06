var Hapi = require('hapi');
var Home = require('./home.js');
var Handlebars = require('handlebars');
var Vision = require('vision');

exports.init = function (port, next) {

    var server = new Hapi.Server();
    server.connection({port: port});

    server.register([Vision, Home], function (err) {
        if (err) {
            return next(err);
        }

        server.views({
            engines: {
                html: Handlebars
            },
            relativeTo: __dirname + '/../views',
            path: '.',
            layout: 'default',
            layoutPath: 'layout'
        });
        server.start(function (err) {
            return next(err, server);
        });
    });
};
