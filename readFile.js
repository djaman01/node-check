//Now that i have created the "welcome.txt" file, i'll create this JS file to read its content and console log it. 
//Here's the code for that:


const fs = require('fs');

// Read the content from "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Content of "welcome.txt":', data);
  }
});


