const utils = require("../utils");

const math = require("mathjs");

const testObj = {
  func: x => x,
  obj: {}
};

describe("", () => {
  test("initial sanity test",  done => {
    console.log(utils.objFunctions(testObj))
    expect(typeof utils.objFunctions(testObj)).toBe('object')
    utils.objFunctions(testObj).map(x => expect(typeof testObj[x]).toBe('function'))
    // expect(utils.objFunctions(testObj)).toBe(['func'])
    done()
  });
  test("", async done => {
expect(utils.objFunctions(math).filter(x=>x === 'sin')[0]).toBe('sin')
  // expect(utils.objFunctions())
    done()
  });
});
