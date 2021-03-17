const request = require('request')

// // Goal: Create a reusable function for getting the forecast
// //
// // 1. Setup the "forecast" function in utils/forecast.js
// // 2. Require the function in app.js and call it as shown below
// // 3. The forecast function should have three potential calls to callback:
// //    - Low level error, pass string for error
// //    - Coordinate error, pass string for error
// //    - Success, pass forecast string for data (same format as from before)



// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

// module.exports = forecast

// // 1. Setup the "forecast" function in utils/forecast.js
// const forecast = () => {

// }

// // 3. The forecast function should have three potential calls to callback:
// //    - Low level error, pass string for error
// //    - Coordinate error, pass string for error

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=84d04c59d6705a161d8977d74bb2d01b&query=${latitide},${longitude}&units=f`;

    request({ url: url, json: true }, (error, response) => {
        //Low level error, pass string for error
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        //Coordinate error, pass string for error
        }else if (response.body.error){
            callback('Unable to find location', undefined)
        //Success, pass forecast string for data (same format as from before)
        }else{
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

// // 2. Require the function in app.js and call it as shown below

module.exports = forecast