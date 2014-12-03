'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');

// APP SET
app.set('port', process.env.PORT || 3000);

// APP USE
app.use(bodyparser.json());
app.use(express.static(__dirname + '/build'));

// START ROUTES
require('./routes/mmm_routes')(app);

app.listen(app.get('port'), function() {
  console.log('mmmWithAngular server running on port: %d', app.get('port'));
});
