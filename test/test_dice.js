let assert = require("assert");
let Dice = require("../src/models/dice.js");

describe("Dice", () => {
    describe("roll()", () => {
        it("should return a number over 0 and less than 7", () => {
            let dice = new Dice(6);
            assert(dice.roll() < 7);
            assert(dice.roll() > 0);
        });
    });
});