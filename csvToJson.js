const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "ziptime.csv");

fs.readFile(filePath, (err, contents) => {
  const lines = contents.toString().split("\r\n");
  const Obj = lines.map(line => {
    const split = line.split(",");
    return {
      zip: split[0],
      time: split[1]
    };
  });
  console.log(Obj);
});
