'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const compliments = require('./compliments');
const criticisms = require('./criticisms');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const token = process.env.SLACK_TOKEN;
const max_length = compliments.length;
const max_critic_length = criticisms.length;

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
      "text": `${username} ${compliment}`.trim()
    });
  }
});

const findComplimentIndex = (index, maxLength) => {
  let newIndex = Math.floor(Math.random() * (maxLength - 0)) + 0;
  if (newIndex === index) {
    newIndex = findComplimentIndex(index)
  }
  return newIndex;
}

app.post('/sandwhich', function(request, response) {
  if (request.body.token !== token) {
    response.status(404).send('Access Forbidden');
  } else {
    const firstIndex = findComplimentIndex(null, max_length);
    const lastIndex  = findComplimentIndex(firstIndex, max_length);

    const openingCompliment = compliments[firstIndex];
    const closingCompliment = compliments[lastIndex];
    const criticism = criticisms[findComplimentIndex(null, max_critic_length)];

    response.send({
      "text": `${openingCompliment}, but I have to say, ${criticism}, but I have always felt like ${closingCompliment}.`
    });
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
