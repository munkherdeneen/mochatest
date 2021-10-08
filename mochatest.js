var expect = chai.expect;

describe("Filter function test", function () {
  it("This house is nice!", function () {
    expect("This house is not nice!".filter("not")).to.equal(
      "This house is nice!"
    );
  });
});

describe("Bubble sort function test", function () {
  it("[10, -4, 0, 35, -25, 1, 11, 25]", function () {
	expect([10, -4, 0, 35, -25, 1, 11, 25].bubbleSort()).to.eql([-25, -4, 0, 1, 10, 11, 25,35]);
  });
});

describe("Teacher inheritence test", function () {
  it("John is now teaching Inheritance", function () {
    var me = new Teacher();

    me.initialize("John", 25);
    expect(me.learn("Inheritance")).to.equal(
      "John is now teaching Inheritance"
    );
  });
});
