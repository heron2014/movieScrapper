exports.register = function (server, options, next) {

    server.route([

    {
        method: 'GET',
        path: '/',
        config: {
            description: 'return home page',
            handler: function (request, reply) {

                reply.view('home');
            }
        }
    },

    {
        method: 'POST',
        path: '/',
        config: {
            description: 'search for movie description',
            handler: function (request, reply) {

                console.log(request.payload.movieTitle);
                reply.view('home', {title: request.payload.movieTitle});
            }
        }
    }

    ]);
    return next();
};

exports.register.attributes = {
    name: 'Home'
};