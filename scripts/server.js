var express = require('express');
var path = require('path');
var events = require('./eventController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8080);
console.log("you are running on 8080");
