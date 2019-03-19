const fs = require("fs");
const path = require("path");

const zipFilePath = path.join(__dirname, "ziptime.json");
const stateFilePath = path.join(__dirname, "statesDaylightSaving.json");

let rawdata = fs.readFileSync(stateFilePath);
let state = JSON.parse(rawdata);
console.log(state);
fs.readFile(zipFilePath, (err, contents) => {
  let fileData = JSON.parse(contents);
  //   console.log(fileData);
  for (each in fileData) {
    fileData[each]["DST"] = state[fileData[each]["state"]];
  }
  console.log(fileData);
  fs.writeFile("finally.json", JSON.stringify(fileData), err => {
    if (err) console.log(err);
  });
});
