var request = require("request")
var UT = require("unixtimejs");

var url = "http://developer.cumtd.com/api/v2.2/json/GetStop?" +
    "key=d99803c970a04223998cabd90a741633" +
    "&stop_id=it"

var host = "https://opendata-download-metobs.smhi.se";
var baseurl;

url = host + "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";
url = host + "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4/station/71130/eskilstuna.json";
url = host + "https://opendata-download-metobs.smhi.se/api/version/latest/parameter/4.json";
url = host + "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/96230.json";
url = host + "/api/version/1.0/parameter/1/station/159880/period/latest-hour.json";
url = host + "/api/version/1.0/parameter/1/station/96230.json"; //funkar
url = host + "/api/version/1.0/parameter/1/station/96230.json";
url = host + "/api/version/latest/parameter/1/station/96230.json";
url = host + "/api/version/1.0/parameter/1/station/96190/period/latest-day/data.json"

var myBody = {};

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
    
    body.value.forEach(function(element){
      var utcString = UT.toLocaleString(element.date / 1000)
      var temp = element.value

      console.log(utcString + " --> " + temp + "℃")
    }) 

      /*
      body.value.forEach(element => {
        var utcString = UT.toLocaleString(element.date / 1000)
        var temp = element.value

        console.log(utcString + " --> " + temp + "℃")
      });
      */
    }
})


//console.log("lat " + myBody.latitude);