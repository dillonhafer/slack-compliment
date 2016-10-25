'use strict';

import {
  newAuthorizedRequest,
  postSandwich
} from './http'

import express from 'express';
import parser from 'body-parser';

const app = express();
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

const sandwich = newAuthorizedRequest(process.env.SLACK_TOKEN, postSandwich);
app.post('/sandwich', sandwich);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
