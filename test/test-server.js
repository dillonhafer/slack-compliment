process.env.NODE_ENV = 'test';
process.env.SLACK_TOKEN = 'secret';

import chai, {should} from 'chai';
import chaiHttp from 'chai-http';
const server = require('../src/server.js');

chai.use(chaiHttp);
should();

describe("Compliment Sandwich", () => {

  describe("POST /sandwich", () => {

    describe("With the wrong slack token", () => {
      it("returns an error without a token", (done) => {
        chai.request(server)
          .post('/sandwich')
          .send({'token': ''})
          .end((err, res) => {
            res.should.have.status(404);
            res.error.text.should.include("Access Forbidden");
            done();
          });
      });
    });

    describe("With the write slack token", () => {
      it("returns a compliment sandwich with a token", (done) => {
        chai.request(server)
          .post('/sandwich')
          .send({'token': 'secret'})
          .end((err, res) => {
            res.should.have.status(200);
            res.text.should.include("but I have to say");
            done();
          });
      });
    });

  });

});

