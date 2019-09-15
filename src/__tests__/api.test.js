const utils = require("../lib"),
  axios = require("axios"),
  config = require("../../config");

// mock objects
const math = require("mathjs");

const PI = Math.PI;
const URL = `${config.HOST_URL}:${config.HOST_PORT}`,
  testUrlSin0 = `${URL}/math/sin/?value=0`,
  // testUrlSin0 = `${URL}/math/sin/?value=0`,
  testUrlSin2arr = `${URL}/math/sin/?value=1&value=2`,
  testUrlSin2val = `${URL}/math/sin/?value=0`,
  testUrlExample = "http://localhost:3000/examples";

const exStat200 = x => expect(x).toBe(200);
const exStat404 = x => expect(x).toBe(404);

describe("example - function", () => {
  test("examples", async done => {
    let res = [];
    res["fun1"] = await axios.get(testUrlExample + "/fun/?value=2");
    res["fun2"] = await axios.get(testUrlExample + "/fun");


    expect(res["fun1"].data.returnValue).toBe("im a function( 2 )");
    expect(res["fun2"].data.returnValue).toBe("im a function(  )");

    done();
  });
});

describe("ROUTES", () => {
  test("routes", async done => {
    const testSin0 = await axios.get(testUrlSin0);
    const testSin2arr = await axios.get(testUrlSin2arr);


    const data = testSin0.data;
    exStat200(testSin0.status);
    expect(testSin0.data.returnValue[0]).toBe(0);
    // });
    done();
  });
});
