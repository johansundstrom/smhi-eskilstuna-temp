/* Denna kod läser metar forecast från SMHI från position lon 16.468774, lat 59.415067.

*/

let lon = '16.468774'; //Torshälla
let lat = '59.415067'; //Torshälla

let request = require("request")

let host = 'https://opendata-download-metfcst.smhi.se';
let getForecast = '/api/category/pmp3g/version/2/geotype/point/lon/' + lon + '/lat/' + lat + '/data.json';
let smhiUrl = host + getForecast;
let myParams = ['t', 'msl', 'ws'];


request({ url: smhiUrl, json: true },
    function (err, res, json) {
        if (!err && res.statusCode === 200) {
            //console.log(json.timeSeries[0].parameters.length);
            console.log(json.timeSeries.length);
            for (let i = 0; i < json.timeSeries.length; i++) {

                console.log(json.timeSeries[i].validTime); //70 prognostider
                //console.log(json.timeSeries[0].parameters.length); //19 prognosparameters

                for (let j = 0; j < json.timeSeries[i].parameters.length; j++) {
                    if (json.timeSeries[i].parameters[j].name == 't') {
                        console.log('Temp: ' + json.timeSeries[i].parameters[j].values[0] + '°' + json.timeSeries[i].parameters[j].unit)
                    }
                    if (json.timeSeries[i].parameters[j].name == 'msl') {
                        console.log('Lufttryck: ' + json.timeSeries[i].parameters[j].values[0] + json.timeSeries[i].parameters[j].unit)
                    }
                    if (json.timeSeries[i].parameters[j].name == 'ws') {
                        console.log('Vind: ' + json.timeSeries[i].parameters[j].values[0] + ' ' + json.timeSeries[i].parameters[j].unit)
                    }
                }
                console.log('----');
            }

        }
    })