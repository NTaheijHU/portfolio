const fetch = require('node-fetch');
const fs  = require('fs');
const colors = require('colors');

require('dotenv').config();

const endpoint = process.env.API_ENDPOINT;

let args = process.argv.slice(2);
let savePath = '';

console.log('Fetching data from API...');

switch(args[0]) {
  case '-D':
    savePath = './data/dev/';
    console.log('Type: Dev Mode'.red);
    break;
  default:
    savePath = './data/';
    console.log('Type: Normal Mode'.green);
}

getUserData();

function getUserData() {
  fetch(endpoint + '/users')
    .then(res => res.json())
    .then(data => {
      const rawData = JSON.stringify(data);

      fs.writeFileSync(savePath + 'test.json', rawData, (err) => {
          if (err) throw err;
      });
    })
}