import { expect } from 'chai';
import { randomIndex, capitalize, sandwich } from '../src/generator.js';

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

  describe("capitalize()", () => {
    it("Capitalizes an all lowercase word", () => {
      expect(capitalize("sandwich")).to.equal("Sandwich");
    });

    it("Doesn't change an all uppercase word", () => {
      expect(capitalize("SANDWICH")).to.equal("SANDWICH");
    });

    it("Capitalizes first word of a sentence", () => {
      expect(capitalize("the quick brown Fox")).to.equal("The quick brown Fox");
    });
  });

  describe("sandwich()", () => {
    it("Returns a compliment sandwhich", () => {
      const compliment  = "you are cool";
      const criticism   = "you smell funny";
      const compliment2 = "you are smart";

      expect(sandwich(compliment, criticism, compliment2)).to.equal("You are cool, but I have to say, you smell funny, but I have always felt like you are smart.");
    });
  });
});
