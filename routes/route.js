'use strict';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home');
    });

     app.get('/anything', function (req, res) {
        res.render('anything');
    });
    
};