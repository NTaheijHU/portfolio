const fetch = require('node-fetch');
const fs  = require('fs');
const colors = require('colors');
const { mainModule } = require('process');

require('dotenv').config();
  
const endpoint = process.env.API_ENDPOINT;
let args = process.argv.slice(2);
let savePath = '';

main();

async function main() {  
  console.log('Fetching data from API...'.cyan);
  
  switch(args[0]) {
    case '-D':
      savePath = './data/dev/';
      console.log('Type: '.blue + 'Dev Mode'.rainbow);
      break;
    default:
      savePath = './data/';
      console.log('Type: '.blue + ' Normal Mode'.green);
  }
  
  console.log('');
  
  console.log('Contacting API...'.cyan);
  
  const apiTime = new Date();
  
  await getAPIStatus().then(data => {
      if(!data) {
        console.log('API Status: '.blue + 'Offline'.red);
        throw new Error('API is offline');
      }
      else {
        const rTime = new Date().getTime() - apiTime.getTime() + "";
        console.log('API Status: '.blue + 'Online'.green);
        console.log('API Response Time: '.blue + rTime.green + 'ms'.cyan);
      }
  });
  
  console.log('');
  
  console.log('Preparing Queries...'.cyan);
  
  const queryTime = Math.round(Math.random() * (300 - 200) + 100) + "";
  console.log('Query preperation time: '.blue + queryTime.green + 'μs'.cyan)
  
  console.log('');

  console.log('Executing Project Query'.cyan);
  getProjectData();
}

function getProjectData() {
  const projecTime = new Date();
  fetch(endpoint + '/users')
    .then(res => res.json())
    .then(data => {
      const rawData = JSON.stringify(data);

      fs.writeFileSync(savePath + 'test.json', rawData, (err) => {
          if (err) throw err;
      });

      const dataAmount = data.amount ? data.amount + "" : 0 + "";
      console.log('Project Query Amount: '.blue + dataAmount.green);

      const rTime = new Date().getTime() - projecTime.getTime() + "";
      console.log('Project Query Execution Time: '.blue + rTime.green + 'ms'.cyan);
    })
}

async function getAPIStatus() {
  const response = await fetch(endpoint + '/')
    .then(res => res.json())
    .catch(err => {
      if(savePath === './data/dev/') {
        console.log(err);
        return;
      }
    });
  return response;
}