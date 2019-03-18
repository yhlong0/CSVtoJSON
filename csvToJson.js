const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "ziptime6.csv");

fs.readFile(filePath, (err, contents) => {
  const lines = contents.toString().split("\n");
  console.log(lines);
  let obj = {};
  const dataArray = lines.forEach(line => {
    const split = line.split(",");
    obj[split[0]] = {
      gmtDifference: split[1],
      timezone: split[2],
      state: split[4].slice(0, -1)
    };
  });

  // const BatchRequests = {
  //   RequestItems: {
  //     zipToTime: dataArray
  //   }
  // };

  fs.writeFile("ziptime6.json", JSON.stringify(obj), err => {
    if (err) console.log(err);
  });

  // console.log(BatchRequests.RequestItems.zipToTime);
});
