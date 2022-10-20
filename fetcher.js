const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3]

request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (error) {
      console.error(error);
    }
    console.log(`File uploaded`);
    console.log(body)
  });
  // console.log('error:', error); // Print the error if one occurred
  // console.log('body:', body); // Print the HTML for the Google homepage.
});
