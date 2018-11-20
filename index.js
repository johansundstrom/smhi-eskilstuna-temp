var request = require("request")
var UT = require("unixtimejs");

var host = "https://opendata-download-metobs.smhi.se"
var qs = "/api/version/1.0/parameter/1/station/96190/period/latest-day/data.json"
var myBody = {}

url = host + qs

/*
// ES6
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
*/


request( { url: url, json: true}, 
  function (err, res, body) {

  if (!err && res.statusCode === 200) {

      /*
      // ES6
      body.value.forEach(element => {
        var utcString = UT.toLocaleString(element.date / 1000)
        var temp = element.value

        console.log(utcString + " --> " + temp + "℃")
      });
      */

    body.value.forEach(function(element){
      var utcString = UT.toLocaleString(element.date / 1000)
      var temp = element.value

      console.log(utcString + " --> " + temp + "℃")
    }) 


    }
})


//console.log("lat " + myBody.latitude);