import { expect } from 'chai';
import { randomIndex } from '../src/generator.js';

describe("Compliment Generator", function(){
  describe("randomIndex()", function() {
    it("returns an index", function(done) {
      expect([0,1,2,3,4,5]).to.include(randomIndex(5));
      done();
    });

    const first = randomIndex(3);
    const tests = [
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first),
      randomIndex(3, first)
    ];

    tests.forEach((test) => {
      it(test+" does not equal duplicate index of "+first, function(done) {
        expect(first).to.not.equal(test);
        done();
      });
    });
  });
});
