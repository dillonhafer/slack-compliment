'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const compliments = require('./compliments');
const criticisms = require('./criticisms');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const token = process.env.SLACK_TOKEN;
const max_length = compliments.length;
const max_critic_length = criticisms.length;

const randomIndex = (maxLength, existingIndex) => {
  let newIndex = Math.floor(Math.random() * (maxLength - 0)) + 0;
  if (newIndex === existingIndex) {
    newIndex = randomIndex(existingIndex)
  }

  return newIndex;
}

app.post('/sandwich', function(request, response) {
  if (request.body.token !== token) {
    response.status(404).send('Access Forbidden');
  } else {
    const firstIndex = randomIndex(max_length);
    const lastIndex  = randomIndex(max_length, firstIndex);

    const openingCompliment = capitalizeFirstLetter(compliments[firstIndex]);
    const closingCompliment = compliments[lastIndex];
    const criticism = criticisms[randomIndex(max_critic_length)];

    response.send({
      "text": `${openingCompliment}, but I have to say, ${criticism}, but I have always felt like ${closingCompliment}.`
    });
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
