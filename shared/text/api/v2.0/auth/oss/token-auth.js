/**
  * Use a token in the Authorization header
  * to authenticate with the InfluxDB 2.x API.
  */

const https = require('https');

function queryWithToken() {

  const options = {
    host: 'localhost:8086',
    path: "/api/v2",
    headers: {
      'Authorization': 'Token YourAuthToken',
      'Content-type': 'application/json'
    },
  };

  const request = https.get(options, (response) => {
    let rawData = '';
    response.on('data', () => {
      response.on('data', (chunk) => { rawData += chunk; });
    })
    response.on('end', () => {
      console.log(rawData);
    })
  });

  request.end();
}
