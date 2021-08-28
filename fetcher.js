const request = require('request');
const fs = require('fs');

const commandlineInput = process.argv.slice(2)
const URL = commandlineInput[0];
const filePath = commandlineInput[1];


// const download = (url, fPath) => {
  
  const response = request.get(URL, (error, response, body) =>  {
    
    const file = fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err)
        return
      }
      let stats = fs.statSync(filePath)
      var fileSizeInBytes = stats.size
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
     
  } )
    // console.log(error); 
    // console.log(response); 
    // console.log(body); 
  })
  // console.log(response)
// }
  









