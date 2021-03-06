'use strict';

var express = require('express');
var init = require('./routes/init.js');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log('Example app listening on port '+app.get('port'));
})

app.use(express.static('static/'));

init(app);
