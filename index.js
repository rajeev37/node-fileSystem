var fs = require("fs");
var file = "./readfile.json";
var findValue = "PB";

module.exports = function(file, findValue) {
  // read file.
  readFile(file, findValue);
}


function readFile(file, findValue) {
  fs.readFile(file, "utf8", function(err, data) {
    var fileData = JSON.parse(data);
    var finalData = [];
    repeatData(fileData, findValue, appendData);
  });
};

// Get all objects based upon conditions.
function repeatData(fileData, findValue, cb) {
  var finalData = [];
  fileData.forEach(function(data, idx) {
    if(data.state == findValue) {
      finalData.push(data);
    }
  });
  cb(finalData);
};

// create new file with final json objects.
function appendData(data) {
  var result = JSON.stringify(data);
  console.log(data[0]);
  fs.appendFile(`${data[0].state}_DATA.json`, result, function(err) {
    console.log('Write file successfully');
  })
}
