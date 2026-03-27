
const fs = require('fs');

fs.readFile('seventh-grade.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }
  console.log(data);
});

const message = 'Hello World';
fs.writeFile('hello-world.txt', message, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully!');
  }
});

fs.unlink('seventh-grade.txt',(err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('seventh-grade.txt has been deleted.');
});