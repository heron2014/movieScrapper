var Request = require('request');
var Cheerio = require('cheerio');

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
                var url = 'http://www.imdb.com/title/tt1355683/?ref_=nv_sr_1';

                Request(url, function (error, response, html) {
                   if (!error) {

                       var $ = Cheerio.load(html);
                       var title;
                       var json = {title: ''};

                       $('.header').filter(function() {
                           var data = $(this);
                           title = data.children().first().text();
                           json.title = title;
                       })
                   }
                    reply.view('home', {title:json.title});

                });


            }
        }
    }

    ]);
    return next();
};

exports.register.attributes = {
    name: 'Home'
};