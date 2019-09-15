const utils = require("../../lib");
const config = require("../../../config");

// mock objects
const math = require("mathjs");
const testObj = {
  func: x => x,
  obj: {}
};

const PI = Math.PI;

describe("", () => {
  test("initial sanity test", done => {
    console.log(utils.listFunctions(testObj));
    expect(typeof utils.listFunctions(testObj)).toBe("object");
    utils
      .listFunctions(testObj)
      .map(x => expect(typeof testObj[x]).toBe("function"));
    // expect(utils.listFunctions(testObj)).toBe(['func'])
    done();
  });
  test("list mathjs functions", async done => {
    expect(utils.listFunctions(math).filter(x => x === "sin")[0]).toBe("sin");

    done();
  });

  test("test listFunctions in mathjs functions", async done => {
    const testFunMath = utils.getFunction(math);
    const testSin = testFunMath("sin");
    const testCos = testFunMath("cos");

    expect(testSin(0)).toBe(0);
    expect(testCos(0)).toBe(1);
    expect(testSin(PI)).toBe(Math.sin(PI));
    expect(testCos(PI)).toBe(Math.cos(PI));

    // expect(utils.listFunctions())
    done();
  });
});
