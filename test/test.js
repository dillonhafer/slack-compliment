process.env.NODE_ENV = 'test';
process.env.SLACK_TOKEN = 'secret';

const chai     = require("chai");
const server   = require("../src/index.js");
const chaiHttp = require('chai-http');
const should   = chai.should();
chai.use(chaiHttp);

describe("Compliment Sandwich", function(){

  describe("POST /sandwich", function() {

    it("returns an error without a token", function(done) {
      chai.request(server)
        .post('/sandwich')
        .send({'token': ''})
        .end(function(err, res){
          res.should.have.status(404);
          res.error.text.should.include("Access Forbidden");
          done();
        });
    });

  });

});

