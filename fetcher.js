const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3]

request(url, (error, response, body) => {
  fs.writeFile(path, body, err => {
    if (error) {
      console.error(error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
