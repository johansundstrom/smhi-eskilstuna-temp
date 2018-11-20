const UT = require("../lib"); // unixtimejs.js
const assert = require("assert");

const jstime = 1517433903000;
const validUnixts = Math.floor(jstime / 1000);

// const unixts = UT.now();
const unixts = UT.fromDate(new Date(jstime));
console.log("current unixTimestamp:", unixts); // 1517433903
assert.equal(unixts, validUnixts);

const localeString = UT.toLocaleString(unixts);
console.log("toLocaleString:", localeString); // "2018-2-1 06:25:03"
console.log("fromLocaleString:", UT.fromLocaleString(localeString)); // 1517433903

const utcString = UT.toUTCString(unixts);
console.log("toUTCString:", utcString); // "Wed, 31 Jan 2018 21:25:03 GMT"
assert.equal(utcString, "Wed, 31 Jan 2018 21:25:03 GMT");

const unixtsFromUTCString = UT.fromUTCString(utcString);
console.log("fromUTCString:", unixtsFromUTCString); // 1517433903
assert.equal(unixtsFromUTCString, validUnixts);

const isoString = UT.toISOString(unixts);
console.log("toISOString:", isoString); //  "2018-01-31T21:25:03Z"
assert.equal(isoString, "2018-01-31T21:25:03Z");

const isoStringTz = UT.toISOString(unixts, "+09:00");
console.log(`toISOString("${unixts}", "+09:00"):`, isoStringTz); //  "2018-02-01T06:25:03+09:00"
assert.equal(isoStringTz, "2018-02-01T06:25:03+09:00");

const unixtsFromISOString = UT.fromISOString(isoString);
console.log(`fromISOString(${isoString}):`, unixtsFromISOString); // 1517433903
assert.equal(unixtsFromISOString, validUnixts);

const unixtsFromISOStringTz = UT.fromISOString(isoStringTz);
console.log(`fromISOString('${isoStringTz}'):`, unixtsFromISOStringTz); // 1517433903
assert.equal(unixtsFromISOStringTz, validUnixts);


console.log("*** all tests passed!");