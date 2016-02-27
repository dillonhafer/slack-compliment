'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var compliments = require('./compliments');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let token = process.env.SLACK_TOKEN;
let max_length = compliments.length;

app.set('view engine', 'ejs');

app.post('/', function(request, response) {
  if (request.body.token !== token) {
    response.status(404).send('Access Forbidden');
  } else {
    let compliment = compliments[Math.floor(Math.random() * (max_length - 0)) + 0];
    var username = '';

    if (request.body.text !== undefined && request.body.text !== '') {
      username = request.body.text;
    }

    response.send({
      "response_type": "in_channel",
      "text": `${username} ${compliment}`
    });
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
