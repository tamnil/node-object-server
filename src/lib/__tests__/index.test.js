const utils = require("../../lib");
const axios = require("axios");
const config = require("../../../config");

// mock objects
const math = require("mathjs");

const testObj = {
  func: x => x,
  obj: {}
};

const PI = Math.PI;
const URL = `${config.HOST_URL}:${config.HOST_PORT}`
const testUrlSin1 = `${URL}/math/sin/?value=1`; // sin(x)
const testUrlSin2val = `${config.HOST_URL}:${config.HOST_PORT}/math/sin/?value=1&value=2`; // sin(x)
// const testUrl2 = "http://localhost:3000/api/asdf";
const testUrlExample = "http://localhost:3000/examples";



describe("e - function", () => {
  test("examples", async done => {
    await axios.get(testUrlExample + '/fun/?value=2').then(res => {
    const data = res.data
      expect(res.status).toBe(200);
      expect(res.data.returnValue).toBe()
      // expect()
// console.log(res.)
      console.log(res.data, "xval");
    });

    done();
  });
});



describe("example - function", () => {
  test("examples", async done => {
    await axios.get(testUrlExample + '/fun').then(res => {
    const data = res.data
      expect(res.status).toBe(200);
      expect(res.data.returnValue).toBe()
      // expect()
// console.log(res.)
      console.log(res.data, "xval");
    });

    done();
  });
});

describe("ROUTES", () => {
  test("routes", async done => {
    await axios.get(testUrlSin1).then(res => {
      const data = res.data;
      expect(res.status).toBe(200);
      expect(res.data.returnValue).toBe();
    });
    done();
  });
});

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
