// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Animal } from "../src/js/animal";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('An Animal', function () {

  describe("Creating animals", function () {

    it("should be possible to create an animal", function () {
      var jurgen = new Animal();
      assert.instanceOf(jurgen, Animal);
    });

    it("should be possible to give animals a name", function () {
      var jurgen = new Animal({
        name: "Jurgen"
      });
      assert.strictEqual(jurgen.name, "Jurgen");
    });

    it("should be possible for animals to relieve themselves", function () {
      var jurgen = new Animal({
        name: "Jurgen"
      });
      assert.isBelow(jurgen.vetBill, 10, 'start off with a reasonable vet bill');
      jurgen.poop();
      assert.isAbove(jurgen.vetBill, 10, 'vet bill gets a new cleaning fee added');
    });

    it("should be possible to pet the animals", function () {
      var jurgen = new Animal({
        name: "Jurgen",
        status: "normal"
      });
      assert.strictEqual(jurgen.status, 'normal');
      jurgen.getsPetted();
      assert.strictEqual(jurgen.status, 'happy');
    });

  });
});
