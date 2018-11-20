const UT = require("../lib"); // unixtimejs.js
const assert = require("assert");

const customLocaleString = "2018.2.1-06:25:03";
const customFormat = "Y.M.D-h:m:s";

const result = UT.fromLocaleString(customLocaleString, customFormat);
console.log(`fromLocaleString("${customLocaleString}", "${customFormat}") ->`, result); // 1517433903

assert.equal(result, 1517433903);

console.log("*** all tests passed!");