// 3-  In this task, you will:

// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt

// Step 1: Create "welcome.txt" with Node.js

// You'll need to use the built-in fs (File System) module in Node.js to create the "welcome.txt" file with the specified content. Here's a code snippet to do that:

const fs = require('fs');

// Content to be written to the file
const content = 'Hello Node';

// Create the "welcome.txt" file
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error creating the file:', err);
  } else {
    console.log('File "welcome.txt" has been created with the content:', content);
  }
});

//Now, when i'll run node createFile.js it will create the file welcome.txt, with the text hello node