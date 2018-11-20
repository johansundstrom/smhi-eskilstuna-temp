## unixtimejs

A simple and tiny npm module for unixtime converting.

## Install

```
npm install --save unixtimejs
```

## Usage

```
const UT = require("unixtimejs");

// get current unixtime:
var ut = UT.now(); // eg: 1517433903

var jstime = ut * 1000;

// JS time -> unixtime
var ut = UT.fromJSTime(jstime); // 1517433903
//  or
var ut = UT.fromDate(new Date(jstime)); // 1517433903

// unixtime -> localeString
var localeString = UT.toLocaleString(ut); // "2018-2-1 06:25:03" (depending on your envrionment)

// unixtime -> UTCString
var utcString = UT.toUTCString(ut); // "Wed, 31 Jan 2018 21:25:03 GMT"

// UTCString -> unixtime
var ut = UT.fromUTCString(utcString); // 1517433903

// unixtime -> ISOString
var isoString = UT.toISOString(ut); //  "2018-01-31T21:25:03Z"

// unixtime -> ISOString (with a timezone)
var isoStringTz = UT.toISOString(ut, "+09:00"); // "2018-02-01T06:25:03+09:00"

// ISOString -> unixtime
var ut = UT.fromISOString(isoString); // 1517433903

// ISOString (with a timezone) -> unixtime
var ut = UT.fromISOString(isoStringTz); // 1517433903

```

## Authors

- **Akira Tanaka** - [akirattii@github](https://github.com/akirattii)

## LICENSE

This project is licensed under the MIT License - see the [LICENSE.txt](./LICENSE.txt) file for details


END