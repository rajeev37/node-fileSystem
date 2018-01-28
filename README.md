# File System Demo.

Read JSON file and extract objects based upon any specific key and write data to new file.

#install

npm i file-system-practice

# Usage.
var fileSystem = require('file-system-practice');
var file = "./inputFile.json";
var findValue = "PB";

fileSystem(file, findValue);

It will search in inputFile with state PB and create a new file having name PB_DATA.json.
