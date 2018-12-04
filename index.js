var request = require("request")

let host = "https://opendata-download-metfcst.smhi.se"
let qs = "/api/category/pmp3g/version/2/geotype/point/lon/16.468774/lat/59.415067/data.json"
let myBody = {}
let smhiUrl = host + qs

request( {url: smhiUrl, json: true}, 
  function (err, res, body) {
    if (!err && res.statusCode === 200) 
    {

/*       for (let i = 0; i < body.timeSeries[0].parameters.length; i++) {
      
        if (body.timeSeries[0].parameters[i].name == 't') {
          console.log(body.timeSeries[0].parameters[i].values[0])
        }
        
      } */
      for (var i = 0; i < body.timeSeries[0].parameters.length; i++)
      {
        if (body.timeSeries[0].parameters[i].name == 't')
        {
          console.log('Temp: ' + body.timeSeries[0].parameters[i].values[0] + '°' + body.timeSeries[0].parameters[i].unit)
        }
        if (body.timeSeries[0].parameters[i].name == 'msl')
        {
          console.log('Lufttryck: ' + body.timeSeries[0].parameters[i].values[0] + body.timeSeries[0].parameters[i].unit)
        }
        if (body.timeSeries[0].parameters[i].name == 'wd')
        {
          console.log('Vind: ' + body.timeSeries[0].parameters[i].values[0] + ' ' + body.timeSeries[0].parameters[i].unit)
        }   
      }
    }
})