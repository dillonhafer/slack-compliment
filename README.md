# Slack Compliment

A very basic Slack command that sends a random compliment to a person you chose (or the entire chanel).

## Installation

The following three steps will install `slack-compliment` and allow you to run it locally.

```
$ git clone git@github.com:silent1mezzo/slack-compliment.git
$ cd slack-compliment/
$ npm install
```

## Usage

### Locally
You can run this app locally to test out the various compliments.

```
$ export SLACK_TOKEN=<token>
$ npm start
$ curl --data "token=<token>&text=@silent1mezzo" http://localhost:5000
```

### Production
To be able to use this command in your Slack channel you'll first have to how this node app somewhere (Heroku for example) and then add it as a [custom integration in Slack](https://api.slack.com/slash-commands).
