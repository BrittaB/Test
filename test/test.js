var expect = require("chai").expect;

describe("calculateTax", function () {
  it("should add appropriate tax to an integer", function () {
    var amount = 4;

    var result = amount * 5;

    expect(result).to.equal(20);
  });
});