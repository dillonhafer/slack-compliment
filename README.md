# Slack Compliment Sandwich [![CircleCI](https://circleci.com/gh/dillonhafer/slack-compliment/tree/master.svg?style=svg)](https://circleci.com/gh/dillonhafer/slack-compliment/tree/master)

A very basic Slack command that sends a random compliment sandwich to a person you chose
(or the entire channel).

## Installation

The following three steps will install `slack-compliment` and allow you to run
it locally.

```
$ git clone git@github.com:dillonhafer/slack-compliment.git
$ cd slack-compliment/
$ yarn install
```

## Testing

```
$ npm test
```

## Usage

### Locally

You can run this app locally to test out the various compliments.

```
$ SLACK_TOKEN=<token> npm start
$ curl --data "token=<token>" -XPOST localhost:5000/sandwich
```

### Production

To be able to use this command in your Slack channel you'll first have to have
this node app somewhere (Heroku for example) and then add it as a [custom
integration in Slack](https://api.slack.com/slash-commands).

### Heroku

If you'd like to use Heroku you can use the following link.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/dillonhafer/slack-compliment/tree/master)
