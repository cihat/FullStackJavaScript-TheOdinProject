const fs = require('fs');
fs.readFile('dosya.txt', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
})