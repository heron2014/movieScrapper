exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        config: {
            description: 'return home page',
            handler: function (request, reply) {

                reply.view('home');
            }
        }
    });
    return next();
};

exports.register.attributes = {
    name: 'Home'
};