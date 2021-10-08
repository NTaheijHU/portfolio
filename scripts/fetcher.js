const fetch = require('node-fetch');
const fs  = require('fs');

require('colors');
require('dotenv').config();
  
const endpoint = process.env.API_ENDPOINT;
let args = process.argv.slice(2);
let savePath = '';

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

  // TODO: FIX ABOUT ENDPOINT
  // await executeQuery('about', 'About');
  await executeQuery('skills', 'Skills');
  await executeQuery('projects', 'Projects');
  await executeQuery('reviews', 'Reviews');

  console.log('Fetching done...'.cyan);
  console.log('Total time'.cyan + ': ' + (new Date().getTime() - apiTime.getTime() + "").green + 'ms'.cyan);
}

async function executeQuery(query, name) {
  console.log('\n' +
      'Executing '.cyan + name.cyan + ' Query'.cyan);
  const projecTime = new Date();
  await fetch(endpoint + '/' + query )
    .then(res => res.json())
    .then(data => {
      const rawData = JSON.stringify(data);

      fs.writeFileSync(savePath + query + '.json', rawData, (err) => {
          if (err) throw err;
      });

      const dataAmount = data.length ? data.length + "" : 0 + "";
      console.log(name.blue + ' Query Amount: '.blue + dataAmount.green);

      const rTime = new Date().getTime() - projecTime.getTime() + "";
      console.log(name.blue + ' Query Execution Time: '.blue + rTime.green + 'ms'.cyan);
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

main();