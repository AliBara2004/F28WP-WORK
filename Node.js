// Import the 'fs' (File System) module
const fs = require('fs');

// Read the content of the input JSON file
const rawData = fs.readFileSync('input.json');
const jsonData = JSON.parse(rawData);

// Manipulate the data (for example, add a new property)
jsonData.newProperty = 'This is a new property';

// Convert the modified data back to JSON format
const modifiedData = JSON.stringify(jsonData, null, 2);

// Write the modified data to a new JSON file
fs.writeFileSync('output.json', modifiedData);

console.log('Data manipulation complete. Check output.json for the modified data.');
