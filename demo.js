var request = require("request")
var UT = require("unixtimejs");

var host = 'https://opendata-download-metobs.smhi.se';
var host = 'https://opendata-download-metfcst.smhi.se';
var qsParams = '/api/version/1.0/parameter/1/station/96190/period/latest-day/data.json';
var qsData = '/api/category/pmp3g/version/2/geotype/point/lon/16.468774/lat/59.415067/data.json';

var weatherUrl = host + qsData;
var paramsUrl = host + qsParams;

/*
// ES6
request(url, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});
*/


request( { url: weatherUrl, json: true}, 
  function (err, res, body) {

    if (!err && res.statusCode === 200) {

      for (var i = 0; i < body.timeSeries.length; i++)
      {
        if (body.timeSeries[0].parameters[i].name == 't')
        {
          console.log(i + ': ' + body.timeSeries[0].parameters[i].name + ' : ' + body.timeSeries[0].parameters[i].values[0] + ' ' + body.timeSeries[0].parameters[i].unit)
          //console.log(body.timeSeries[0].parameters[i].unit)
          //console.log(body.timeSeries[0].parameters[i].values[0])
        } else {
          console.log(i + ': ' + body.timeSeries[0].parameters[i].name + ' : ' + body.timeSeries[0].parameters[i].values[0] + ' ' + body.timeSeries[0].parameters[i].unit)
        }
      }
      
      
      /*
      body.timeSeries[0].parameters[1].values.forEach(function(element){
        console.log(element)
      })
      console.log(body.timeSeries[0].parameters[1].name)
      //console.log(body.timeSeries[0].parameters[1].values[0])
      */

        /*
        // ES6
        body.value.forEach(element => {
          var utcString = UT.toLocaleString(element.date / 1000)
          var temp = element.value

          console.log(utcString + " --> " + temp + "℃")
        });
        */

        /*
        body.value.forEach(function(element){
          var utcString = UT.toLocaleString(element.date / 1000)
          var temp = element.value

          console.log(utcString + " --> " + temp + "℃")
        })
        */ 
    }
})


//console.log("lat " + myBody.latitude);